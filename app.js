// Dictionary object for i18n
const translations = {
    pt: {
        header: {
            title: 'Amazônia Azul Database',
            subtitle: 'Produtos Naturais Marinhos',
            aboutLink: 'Sobre o Projeto'
        },
        search: {
            placeholder: 'Pesquisar compostos, SMILES, espécies...'
        },
        filter: {
            allPathways: 'Todas as Vias'
        },
        pathways: {
            'Alkaloids': 'Alcaloides',
            'Terpenoids': 'Terpenoides',
            'Polyketides': 'Policetídeos',
            'Amino acids and Peptides': 'Aminoácidos e Peptídeos',
            'Amino acids and Peptides/ Polyketides': 'Aminoácidos e Peptídeos / Policetídeos',
            'Shikimates and Phenylpropanoids': 'Xiquimatos e Fenilpropanoides',
            'Carbohydrates': 'Carboidratos',
            'Fatty acids': 'Ácidos Graxos',
            'Alkaloids/ Amino acids and peptides': 'Alcaloides / Aminoácidos e Peptídeos'
        },
        pagination: {
            prev: 'Anterior',
            next: 'Próximo',
            showing: (start, end, total) => `Exibindo ${start}–${end} de ${total}`
        },
        card: {
            molWeight: 'Massa Mol.',
            pathway: 'Via'
        },
        modal: {
            compoundName: 'Nome do Composto',
            species: 'Espécie de Origem',
            molWeight: 'Massa Molecular',
            cLogP: 'cLogP',
            hAcceptors: 'Aceitadores de H',
            hDonors: 'Doadores de H',
            sp3Carbon: 'Fração de C-sp3',
            metabolicPathway: 'Via Metabólica',
            bioactivity: 'Bioatividade',
            reference: 'Referência Bibliográfica',
            smiles: 'Estrutura SMILES'
        },
        about: {
            title: 'Sobre o Projeto',
            desc1: 'O Amazônia Azul Database (AMAZUL DB) é uma coleção curada de produtos naturais marinhos derivados da biodiversidade marinha brasileira.',
            desc2: 'O banco de dados visa apoiar pesquisas em química medicinal, biologia química e descoberta de fármacos, fornecendo estruturas químicas e propriedades físico-químicas básicas em um formato web acessível.',
            authorshipTitle: 'Autoria',
            developedBy: 'Desenvolvido por:',
            authorName: 'Larissa Oliveira Dourado',
            studentRole: 'Estudante de graduação em Farmácia<br>Instituto Politécnico de Bragança (início do projeto) e Universidade Estadual de Feira de Santana (conclusão do projeto)',
            supervision: 'Orientação acadêmica:',
            supervisorName: 'Carlos Seiti Hurtado Shiraishi',
            year: 'Ano:',
            methodologyTitle: 'Metodologia',
            method1: 'Os dados estão organizados em um arquivo CSV estruturado e visualizados por meio de uma aplicação web estática construída com HTML, CSS e JavaScript.',
            method2: 'As estruturas químicas são renderizadas diretamente no navegador usando RDKit.js.',
            method3: 'O processo de desenvolvimento contou com o suporte do modelo Gemini 3 Pro.',
            contactTitle: 'Contato / Repositório',
            repoLabel: 'Repositório GitHub:',
            emailLabel: 'E-mail de contato:'
        },
        states: {
            loading: 'Carregando dados da Amazônia Azul...',
            errorLoading: 'Erro ao carregar a aplicação. Veja o console.',
            noResults: 'Nenhum composto encontrado.',
            resultsCount: (count) => `${count} Resultado${count === 1 ? '' : 's'}`
        },
        footer: {
            text: '© 2026 Amazônia Azul Database. Mapeando a biodiversidade marinha do Brasil.'
        }
    },
    en: {
        header: {
            title: 'Blue Amazon Database',
            subtitle: 'Marine Natural Products',
            aboutLink: 'About Project'
        },
        search: {
            placeholder: 'Search compounds, smiles, species...'
        },
        filter: {
            allPathways: 'All Pathways'
        },
        pathways: {
            'Alkaloids': 'Alkaloids',
            'Terpenoids': 'Terpenoids',
            'Polyketides': 'Polyketides',
            'Amino acids and Peptides': 'Amino acids and Peptides',
            'Amino acids and Peptides/ Polyketides': 'Amino acids and Peptides / Polyketides',
            'Shikimates and Phenylpropanoids': 'Shikimates and Phenylpropanoids',
            'Carbohydrates': 'Carbohydrates',
            'Fatty acids': 'Fatty acids',
            'Alkaloids/ Amino acids and peptides': 'Alkaloids / Amino acids and peptides'
        },
        pagination: {
            prev: 'Previous',
            next: 'Next',
            showing: (start, end, total) => `Showing ${start}–${end} of ${total}`
        },
        card: {
            molWeight: 'Mol. Weight',
            pathway: 'Pathway'
        },
        modal: {
            compoundName: 'Compound Name',
            species: 'Source Species',
            molWeight: 'Mol. Weight',
            cLogP: 'cLogP',
            hAcceptors: 'H-Acceptors',
            hDonors: 'H-Donors',
            sp3Carbon: 'sp3-Carbon Fraction',
            metabolicPathway: 'Metabolic Pathway',
            bioactivity: 'Bioactivity',
            reference: 'Literature Reference',
            smiles: 'SMILES Structure'
        },
        about: {
            title: 'About the Project',
            desc1: 'The Blue Amazon Database is a curated collection of marine natural products derived from Brazilian marine biodiversity.',
            desc2: 'The database aims to support research in medicinal chemistry, chemical biology, and drug discovery by providing chemical structures and basic physicochemical properties in an accessible web-based format.',
            authorshipTitle: 'Authorship',
            developedBy: 'Developed by:',
            authorName: 'Larissa Oliveira Dourado',
            studentRole: 'Undergraduate student in Pharmacy<br>Instituto Politécnico de Bragança (project initiation) and Universidade Estadual de Feira de Santana (project completion)',
            supervision: 'Academic supervision:',
            supervisorName: 'Carlos Seiti Hurtado Shiraishi',
            year: 'Year:',
            methodologyTitle: 'Methodology',
            method1: 'The data are organized in a structured CSV file and visualized through a static web application built with HTML, CSS, and JavaScript.',
            method2: 'Chemical structures are rendered directly in the browser using RDKit.',
            method3: 'The development process was supported by the Gemini 3 Pro model.',
            contactTitle: 'Contact / Repository',
            repoLabel: 'GitHub repository:',
            emailLabel: 'Contact email:'
        },
        states: {
            loading: 'Loading Blue Amazon Data...',
            errorLoading: 'Error loading application. See console.',
            noResults: 'No compounds found.',
            resultsCount: (count) => `${count} Result${count === 1 ? '' : 's'}`
        },
        footer: {
            text: '© 2026 Blue Amazon Database. Tracking Brazil\'s marine biodiversity.'
        }
    }
};

// State
const state = {
    compounds: [],
    rdkit: null,
    wasmLoaded: false,
    lang: localStorage.getItem('amazul_lang') || 'en',
    activeCompound: null,
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
    aboutModalBody: document.getElementById('aboutModalBody'),
    closeAboutModal: document.getElementById('closeAboutModal'),
    paginationContainers: document.querySelectorAll('.js-pagination-container'),
    prevBtns: document.querySelectorAll('.js-page-prev'),
    nextBtns: document.querySelectorAll('.js-page-next'),
    pageInfos: document.querySelectorAll('.js-page-info'),
    langBtns: document.querySelectorAll('.lang-btn')
};

// Translation helper
function t(path) {
    const keys = path.split('.');
    let res = translations[state.lang];
    for (const key of keys) {
        if (!res || res[key] === undefined) return path;
        res = res[key];
    }
    return res;
}

// Language management
function setLanguage(lang) {
    if (!translations[lang] || state.lang === lang) return;
    state.lang = lang;
    localStorage.setItem('amazul_lang', lang);
    applyLanguage();
}

function applyLanguage() {
    // 1. Highlight language buttons
    if (elements.langBtns) {
        elements.langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === state.lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // 2. Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = t(key);
        if (typeof translated === 'string') {
            el.textContent = translated;
        }
    });

    // 3. Update data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translated = t(key);
        if (typeof translated === 'string') {
            el.placeholder = translated;
        }
    });

    // 4. Update html lang attribute
    document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : 'en';

    // 5. Update pathway dropdown options labels while preserving value
    populatePathways();

    // 6. Update current grid view
    renderGrid();

    // 7. Update About Modal if open
    if (elements.aboutModal && !elements.aboutModal.classList.contains('hidden')) {
        renderAboutModal();
    }

    // 8. Update Detail Modal if open and active compound exists
    if (state.activeCompound && elements.modal && !elements.modal.classList.contains('hidden')) {
        openModal(state.activeCompound);
    }
}

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

        applyLanguage();

        // Language buttons listener
        if (elements.langBtns) {
            elements.langBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    if (lang) setLanguage(lang);
                });
            });
        }

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
        elements.grid.innerHTML = `<div class="loading-state"><p style="color: #f87171;">${t('states.errorLoading')}</p></div>`;
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
    const currentVal = state.filters.pathway || 'All';
    elements.pathwayFilter.innerHTML = '';

    const defaultOpt = document.createElement('option');
    defaultOpt.value = 'All';
    defaultOpt.textContent = t('filter.allPathways');
    elements.pathwayFilter.appendChild(defaultOpt);

    const pathways = new Set(state.compounds.map(c => c.metabolicPathway).filter(p => p && p !== 'Unknown'));
    const sorted = Array.from(pathways).sort();

    sorted.forEach(p => {
        const option = document.createElement('option');
        option.value = p;
        const translatedLabel = t(`pathways.${p}`);
        option.textContent = (typeof translatedLabel === 'string' && translatedLabel !== `pathways.${p}`)
            ? translatedLabel
            : p;
        elements.pathwayFilter.appendChild(option);
    });

    elements.pathwayFilter.value = currentVal;
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

    const resultsFn = t('states.resultsCount');
    elements.resultCount.textContent = typeof resultsFn === 'function' ? resultsFn(totalItems) : `${totalItems} Results`;
    elements.grid.innerHTML = '';

    if (totalItems === 0) {
        elements.grid.innerHTML = `<div class="loading-state"><p>${t('states.noResults')}</p></div>`;
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
        const pathwayText = t(`pathways.${compound.metabolicPathway}`) !== `pathways.${compound.metabolicPathway}`
            ? t(`pathways.${compound.metabolicPathway}`)
            : compound.metabolicPathway;

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
                        <span class="meta-label">${t('card.molWeight')}</span>
                        <span class="meta-value">${compound.molWeight}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">${t('card.pathway')}</span>
                        <span class="meta-value" title="${pathwayText}">${pathwayText}</span>
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

    const showingFn = t('pagination.showing');
    const infoText = typeof showingFn === 'function'
        ? showingFn(startItem, endItem, totalItems)
        : `Showing ${startItem}–${endItem} of ${totalItems}`;

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
    }
}

// Detail Modal
function openModal(compound) {
    state.activeCompound = compound;
    const canvasId = `modal-mol-${compound.id}`;

    const pathwayText = t(`pathways.${compound.metabolicPathway}`) !== `pathways.${compound.metabolicPathway}`
        ? t(`pathways.${compound.metabolicPathway}`)
        : compound.metabolicPathway;

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
                        <span class="meta-label">${t('modal.molWeight')}</span>
                        <span class="meta-value">${compound.molWeight}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">${t('modal.cLogP')}</span>
                        <span class="meta-value">${compound.cLogP}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">${t('modal.hAcceptors')}</span>
                        <span class="meta-value">${compound.hAcceptors}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">${t('modal.hDonors')}</span>
                        <span class="meta-value">${compound.hDonors}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">${t('modal.sp3Carbon')}</span>
                        <span class="meta-value">${compound.sp3Carbon}</span>
                    </div>
                </div>

                <div class="section-title">${t('modal.metabolicPathway')}</div>
                <div class="desc-box">${pathwayText}</div>

                <div class="section-title">${t('modal.bioactivity')}</div>
                <div class="desc-box">${compound.bioactivity}</div>

                <div class="section-title">${t('modal.reference')}</div>
                <div class="reference">${compound.reference}</div>

                <code class="smiles-code">${compound.smiles}</code>
            </div>
        </div>
    `;

    elements.modal.classList.remove('hidden');
    elements.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => drawMolecule(compound.smiles, canvasId), 0);
}

function closeModal() {
    state.activeCompound = null;
    elements.modal.classList.remove('active');
    setTimeout(() => elements.modal.classList.add('hidden'), 200);
    document.body.style.overflow = '';
}

// About Modal
function renderAboutModal() {
    if (!elements.aboutModalBody) return;

    elements.aboutModalBody.innerHTML = `
        <h2 class="modal-title" style="font-size: 1.5rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
            ${t('about.title')}
        </h2>

        <div class="desc-box">
            <p style="margin-bottom: 1rem;">${t('about.desc1')}</p>
            <p>${t('about.desc2')}</p>
        </div>

        <h3 class="section-title">${t('about.authorshipTitle')}</h3>
        <div class="desc-box">
            <p><strong>${t('about.developedBy')}</strong> ${t('about.authorName')}</p>
            <p class="text-muted" style="margin-top: 0.5rem; font-size: 0.9em;">
                ${t('about.studentRole')}
            </p>
            <p style="margin-top: 0.5rem;"><strong>${t('about.supervision')}</strong> ${t('about.supervisorName')}</p>
            <p><strong>${t('about.year')}</strong> 2025</p>
        </div>

        <h3 class="section-title">${t('about.methodologyTitle')}</h3>
        <div class="desc-box">
            <ul style="padding-left: 1.25rem; list-style-type: disc;">
                <li>${t('about.method1')}</li>
                <li>${t('about.method2')}</li>
                <li>${t('about.method3')}</li>
            </ul>
        </div>

        <h3 class="section-title">${t('about.contactTitle')}</h3>
        <div class="desc-box">
            <p><strong>${t('about.repoLabel')}</strong> <a href="#" class="text-teal-400 hover:text-white transition-colors">[LINK DO REPOSITÓRIO]</a></p>
            <p><strong>${t('about.emailLabel')}</strong> larissaodourado@gmail.com</p>
        </div>
    `;
}

function openAboutModal() {
    renderAboutModal();
    elements.aboutModal.classList.remove('hidden');
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
