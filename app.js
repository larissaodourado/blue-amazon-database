// State
const state = {
    compounds: [],
    rdkit: null,
    wasmLoaded: false,
    filters: {
        search: '',
        pathway: 'All'
    },
    pagination: {
        currentPage: 1,
        pageSize: 40
    }
};

// DOM Elements
const elements = {
    grid: document.getElementById('compoundGrid'),
    searchInput: document.getElementById('searchInput'),
    pathwayFilter: document.getElementById('pathwayFilter'),
    resultCount: document.getElementById('resultCount'),
    modal: document.getElementById('detailModal'),
    modalBody: document.getElementById('modalBody'),
    closeModal: document.getElementById('closeModal'),
    aboutBtn: document.getElementById('aboutBtn'),
    aboutModal: document.getElementById('aboutModal'),
    closeAboutModal: document.getElementById('closeAboutModal'),
    closeAboutModal: document.getElementById('closeAboutModal'),
    paginationContainers: document.querySelectorAll('.js-pagination-container'),
    prevBtns: document.querySelectorAll('.js-page-prev'),
    nextBtns: document.querySelectorAll('.js-page-next'),
    pageInfos: document.querySelectorAll('.js-page-info')
};

// Initialize App
async function init() {
    try {
        // Parallel load: RDKit + Data
        const [rdkit, data] = await Promise.all([
            loadRDKit(),
            loadData()
        ]);

        state.rdkit = rdkit;
        state.wasmLoaded = true;
        state.compounds = data;

        populatePathways();
        renderGrid();

        // Listeners
        elements.searchInput.addEventListener('input', (e) => {
            state.filters.search = e.target.value.toLowerCase();
            state.pagination.currentPage = 1; // Reset to page 1
            renderGrid();
        });

        elements.pathwayFilter.addEventListener('change', (e) => {
            state.filters.pathway = e.target.value;
            state.pagination.currentPage = 1; // Reset to page 1
            renderGrid();
        });

        // Pagination Listeners
        elements.prevBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (state.pagination.currentPage > 1) {
                    state.pagination.currentPage--;
                    renderGrid();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        elements.nextBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const totalItems = getFilteredCompounds().length;
                const totalPages = Math.ceil(totalItems / state.pagination.pageSize);
                if (state.pagination.currentPage < totalPages) {
                    state.pagination.currentPage++;
                    renderGrid();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        elements.closeModal.addEventListener('click', closeModal);
        elements.modal.addEventListener('click', (e) => {
            if (e.target === elements.modal) closeModal();
        });

        // About Modal Listeners
        if (elements.aboutBtn) {
            elements.aboutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openAboutModal();
            });
        }
        if (elements.closeAboutModal) {
            elements.closeAboutModal.addEventListener('click', closeAboutModal);
        }
        if (elements.aboutModal) {
            elements.aboutModal.addEventListener('click', (e) => {
                if (e.target === elements.aboutModal) closeAboutModal();
            });
        }

    } catch (err) {
        console.error('Initialization Error:', err);
        elements.grid.innerHTML = `<div class="loading-state"><p class="text-red-400">Error loading application. See console.</p></div>`;
    }
}

// Load RDKit
function loadRDKit() {
    return new Promise((resolve, reject) => {
        if (!window.initRDKitModule) {
            reject(new Error('RDKit JS not loaded'));
            return;
        }
        window.initRDKitModule()
            .then(instance => {
                console.log('RDKit WASM loaded');
                resolve(instance);
            })
            .catch(reject);
    });
}

// Load CSV Data
function loadData() {
    return new Promise((resolve, reject) => {
        Papa.parse('blue_amazon_db.csv', {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                // Map CSV to clean objects
                const data = results.data.map((row, idx) => ({
                    id: idx + 1,
                    name: row['Compound name'] || 'Unknown',
                    smiles: row['SMILES'] || '',
                    molWeight: row['Total Molweight'] || '-',
                    cLogP: row['cLogP'] || '-',
                    hAcceptors: row['H-Acceptors'] || '-',
                    hDonors: row['H-Donors'] || '-',
                    sp3Carbon: row['sp3-Carbon Fraction'] || '-',
                    metabolicPathway: row['Metabolic pathway'] || 'Unknown',
                    bioactivity: row['Bioactivity'] || 'Not specified',
                    species: row['Species'] || 'Unknown',
                    reference: row['Reference'] || ''
                }));
                resolve(data);
            },
            error: reject
        });
    });
}

// Filter Logic
function getFilteredCompounds() {
    return state.compounds.filter(c => {
        const matchesSearch =
            c.name.toLowerCase().includes(state.filters.search) ||
            c.species.toLowerCase().includes(state.filters.search) ||
            c.smiles.toLowerCase().includes(state.filters.search);

        const matchesPathway =
            state.filters.pathway === 'All' ||
            c.metabolicPathway === state.filters.pathway;

        return matchesSearch && matchesPathway;
    });
}

function populatePathways() {
    const pathways = new Set(state.compounds.map(c => c.metabolicPathway).filter(p => p && p !== 'Unknown'));
    const sorted = Array.from(pathways).sort();

    sorted.forEach(p => {
        const option = document.createElement('option');
        option.value = p;
        option.textContent = p;
        elements.pathwayFilter.appendChild(option);
    });
}

// Render Grid
function renderGrid() {
    const filtered = getFilteredCompounds();
    const totalItems = filtered.length;

    // Pagination Logic
    const pageSize = state.pagination.pageSize;
    const startIdx = (state.pagination.currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const paginatedItems = filtered.slice(startIdx, endIdx);

    elements.resultCount.textContent = `${totalItems} Results`;
    elements.grid.innerHTML = '';

    if (totalItems === 0) {
        elements.grid.innerHTML = `<div class="loading-state"><p>No compounds found.</p></div>`;
        updatePagination(0);
        return;
    }

    // Fragment for performance
    const fragment = document.createDocumentFragment();

    paginatedItems.forEach(compound => {
        const card = document.createElement('div');
        card.className = 'compound-card';
        card.onclick = () => openModal(compound);

        const canvasId = `mol-canvas-${compound.id}`;

        card.innerHTML = `
            <div class="card-canvas-wrapper">
                <canvas id="${canvasId}" width="250" height="200"></canvas>
            </div>
            <div class="card-body">
                <div class="card-title" title="${compound.name}">${compound.name}</div>
                <div class="card-species">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-4.3-4.3"/><path d="M11 8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V11a3 3 0 0 0-3-3z"/><path d="M11 3a3 3 0 0 0-3 3"/></svg>
                    <span>${compound.species}</span>
                </div>
                <div class="card-meta">
                    <div class="meta-item">
                        <span class="meta-label">Mol. Weight</span>
                        <span class="meta-value">${compound.molWeight}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Pathway</span>
                        <span class="meta-value">${compound.metabolicPathway}</span>
                    </div>
                </div>
            </div>
        `;

        fragment.appendChild(card);

        // Defer drawing
        setTimeout(() => drawMolecule(compound.smiles, canvasId), 0);
    });

    elements.grid.appendChild(fragment);
    updatePagination(totalItems);
}

// Update Pagination Controls
function updatePagination(totalItems) {
    if (!elements.paginationContainers.length) return;

    elements.paginationContainers.forEach(container => {
        if (totalItems <= state.pagination.pageSize && state.pagination.currentPage === 1) {
            // If we have items but less than one page, show controls disabled (so user sees count)
            // If 0 items, hide controls
            if (totalItems === 0) {
                container.classList.add('hidden');
            } else {
                container.classList.remove('hidden');
            }
        } else {
            container.classList.remove('hidden');
        }
    });

    if (totalItems === 0) return;

    const totalPages = Math.ceil(totalItems / state.pagination.pageSize);
    const startItem = (state.pagination.currentPage - 1) * state.pagination.pageSize + 1;
    const endItem = Math.min(state.pagination.currentPage * state.pagination.pageSize, totalItems);
    const infoText = `Showing ${startItem}–${endItem} of ${totalItems}`;

    elements.pageInfos.forEach(el => el.textContent = infoText);

    // Disable buttons
    elements.prevBtns.forEach(btn => btn.disabled = state.pagination.currentPage === 1);
    elements.nextBtns.forEach(btn => btn.disabled = state.pagination.currentPage >= totalPages);
}

// Draw Molecule using RDKit
function drawMolecule(smiles, canvasId) {
    if (!state.rdkit || !smiles) return;

    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    try {
        const mol = state.rdkit.get_mol(smiles);
        if (mol) {
            mol.draw_to_canvas_with_highlights(canvas, JSON.stringify({
                width: canvas.width,
                height: canvas.height,
                backgroundOpacity: 0 // Transparent background
            }));
            mol.delete();
        }
    } catch (e) {
        console.warn('Failed to draw molecule:', smiles);
        // Fallback or error indication?
        // canvas.style.background = '#fee2e2';
    }
}

// Modal
function openModal(compound) {
    const canvasId = `modal-mol-${compound.id}`;

    elements.modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-left">
                <div class="modal-structure-container">
                    <canvas id="${canvasId}" width="400" height="300"></canvas>
                </div>
            </div>
            
            <div class="modal-right">
                <h2 class="modal-title">${compound.name}</h2>
                <div class="tags">
                    <span class="tag">ID: ${compound.id}</span>
                    <span class="tag">${compound.species}</span>
                </div>

                <div class="props-grid">
                    <div class="meta-item">
                        <span class="meta-label">Mol. Weight</span>
                        <span class="meta-value">${compound.molWeight}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">cLogP</span>
                        <span class="meta-value">${compound.cLogP}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">H-Acceptors</span>
                        <span class="meta-value">${compound.hAcceptors}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">H-Donors</span>
                        <span class="meta-value">${compound.hDonors}</span>
                    </div>
                </div>

                <div class="section-title">Metabolic Pathway</div>
                <div class="desc-box">${compound.metabolicPathway}</div>

                <div class="section-title">Bioactivity</div>
                <div class="desc-box">${compound.bioactivity}</div>

                <div class="section-title">Reference</div>
                <div class="reference">${compound.reference}</div>

                <code class="smiles-code">${compound.smiles}</code>
            </div>
        </div>
    `;

    elements.modal.classList.remove('hidden');
    elements.modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    setTimeout(() => drawMolecule(compound.smiles, canvasId), 0);
}

function closeModal() {
    elements.modal.classList.remove('active');
    setTimeout(() => elements.modal.classList.add('hidden'), 200); // Wait for transition
    document.body.style.overflow = '';
}

function openAboutModal() {
    elements.aboutModal.classList.remove('hidden');
    // small timeout to allow display:block to apply before opacity transition
    setTimeout(() => elements.aboutModal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closeAboutModal() {
    elements.aboutModal.classList.remove('active');
    setTimeout(() => elements.aboutModal.classList.add('hidden'), 200);
    document.body.style.overflow = '';
}

// Start
init();
