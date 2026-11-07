# IARA Database

### Inventário da Amazônia Azul

The IARA Database is a scientific initiative dedicated to the organization and exploration of natural products reported from organisms associated with Brazil's Amazônia Azul.

The platform provides a curated collection of chemical, physicochemical, biological, taxonomic, geographic, and bibliographic information to support research on marine natural products and their potential applications in drug discovery.

## Features

- **Compound database:** organized records of natural products reported in scientific literature.
- **Chemical structures:** 2D molecular structure visualization from SMILES using RDKit.
- **Search and filtering:** compound search and filtering by metabolic pathway.
- **Physicochemical properties:** molecular weight, cLogP, hydrogen-bond acceptors and donors, relative PSA, rotatable bonds, and sp³-carbon fraction.
- **Biological information:** bioactivity, organism, species, family, and geographic origin.
- **Toxicity information:** mutagenicity data when available.
- **References:** bibliographic information and DOI links.
- **Data download:** access to the database in CSV format.
- **Responsive interface:** accessible through desktop and mobile browsers.

## Technology

The platform is built using:

- HTML5
- CSS3
- JavaScript
- RDKit.js / WebAssembly
- Papa Parse

The application uses a static architecture and does not require a backend server.

## Repository Structure

- `index.html` — institutional landing page.
- `landing.css` — landing page styles.
- `database.html` — interactive database interface.
- `style.css` — database interface styles.
- `app.js` — application logic and data visualization.
- `iara_db.csv` — updated scientific dataset.
- `lib/` — supporting JavaScript libraries.

## Local Development

To run the application locally, start a simple HTTP server from the project directory:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

A local HTTP server is required for the correct loading of WebAssembly resources and CSV data.

## Project Development

The initiative began during an academic project at Universidade Politécnica de Bragança (UPB) and was subsequently developed and completed at Universidade Estadual de Feira de Santana (UEFS), Brazil.

**Author:** Larissa Oliveira Dourado

© 2026 IARA Database.
