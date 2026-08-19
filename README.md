# 2025 New York QSO Party — Results Dashboard

An interactive, modern HTML dashboard presenting the official results of the **2025 New York QSO Party (NYQP)**, held October 18–19, 2025.

🌐 **Live Site:** [https://rusk2ua.github.io/nyqp-dashboard/](https://rusk2ua.github.io/nyqp-dashboard/)

---

## Overview

This dashboard was created to drive engagement among both existing and potential new participants in the New York QSO Party. It presents key statistics, category winners, and highlights in a visually appealing, mobile-friendly format.

### Contest Summary

| Metric | Value |
|--------|-------|
| Logs Submitted | 513 |
| Total QSOs | 78,373 |
| Unique Callsigns | 6,068 |
| DXCC Countries | 75 |
| QSO Accuracy | 97.5% |
| Total Points | 8,937,505 |

---

## Pages

The dashboard consists of a **main landing page** plus **7 deep-dive pages**:

| Page | Description |
|------|-------------|
| [Dashboard](docs/index.html) | Hero stats, top 10 leaderboard, interactive charts, quick navigation |
| [In-State (NY)](docs/pages/in-state.html) | NY operator results across Multi-Op, High Power, Low Power, QRP, and Mobile |
| [Out-of-State](docs/pages/out-of-state.html) | Top 25 out-of-state scores, state participation, mode breakdown |
| [DX](docs/pages/dx.html) | 75 DXCC countries worked, rare DX highlights, country QSO chart |
| [Clubs](docs/pages/clubs.html) | Club competition standings, BSA JOTA spotlight |
| [Golden Logs](docs/pages/golden-logs.html) | High-score + low-error elite logs, perfect logs, scatter plot |
| [Records & Milestones](docs/pages/records.html) | Category winners, achievements, contest superlatives |
| [Mobiles](docs/pages/mobiles.html) | Mobile operator rankings, tips for newcomers, soapbox quotes |

---

## Features

- **Responsive Design** — Works on desktop, tablet, and mobile
- **Interactive Charts** — Bar charts, doughnut charts, and scatter plots via [Chart.js](https://www.chartjs.org/)
- **Filtering & Search** — Filter results by category/mode and search by callsign
- **Sortable Tables** — Clean, readable data tables with hover highlighting
- **No Build Step** — Pure static HTML/CSS/JS; no frameworks, no bundlers, no dependencies to install
- **GitHub Pages Ready** — Served directly from the `/docs` folder

---

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Markup | HTML5 |
| Styling | Custom CSS (CSS Variables, Grid, Flexbox) |
| Charts | [Chart.js v4](https://www.chartjs.org/) (CDN) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts) |
| Hosting | GitHub Pages |

No server-side processing, no build tools, no `npm install` required.

---

## Data Sources

Raw log-checking output files are maintained in a private companion repository. The docs/js/data.js file contains the processed data used by this dashboard.

- `ny-qso-party-2025.txt` — Contest summary statistics
- `ny-qso-party-2025.line_scores.txt` — Per-station scores and categories
- `ny-qso-party-2025.cty.txt` — DXCC country breakdown
- `ny-qso-party-2025.sbx.txt` — Soapbox comments from participants

Log checking performed by **K1EA Software v2.0.039** (QT Version 6.3.1).

---

## Deployment

This site is deployed via **GitHub Pages** from the `/docs` folder on the `main` branch.

### To deploy yourself:

1. Go to **Settings → Pages** in this repository
2. Set **Source** to "Deploy from a branch"
3. Set **Branch** to `main` and **Folder** to `/docs`
4. Click **Save**
5. The site will be live in ~60 seconds

The `.nojekyll` file in `/docs` ensures GitHub serves the raw HTML without Jekyll processing.

---

## Local Development

To preview locally, simply open `docs/index.html` in a web browser:

```bash
# Clone the repo
git clone https://github.com/rusk2ua/nyqp-dashboard.git
cd nyqp-dashboard

# Open in browser (macOS)
open docs/index.html

# Or use any static file server
python3 -m http.server 8000 --directory docs
# Then visit http://localhost:8000
```

---

## Project Structure

```
nyqp-dashboard/
├── README.md
├── docs/                          # Dashboard (served by GitHub Pages)
│   ├── .nojekyll                  # Bypass Jekyll processing
│   ├── index.html                 # Main landing page
│   ├── css/
│   │   └── style.css              # All styles (CSS variables, responsive)
│   ├── js/
│   │   └── data.js                # Structured contest data (JSON-like)
│   └── pages/
│       ├── in-state.html          # NY operator results
│       ├── out-of-state.html      # Non-NY US results
│       ├── dx.html                # International/DX results
│       ├── clubs.html             # Club competition
│       ├── golden-logs.html       # Accuracy highlights
│       ├── records.html           # Records & milestones
│       └── mobiles.html           # Mobile operator results
├── results/                       # Raw log-checking output files
│   ├── ny-qso-party-2025.txt
│   ├── ny-qso-party-2025.line_scores.txt
│   ├── ny-qso-party-2025.cty.txt
│   ├── ny-qso-party-2025.sbx.txt
│   └── ... (other analysis files)
└── *.pdf                          # Official rules & records PDFs
```

---

## Contributing

Suggestions and improvements are welcome! Some ideas for future enhancements:

- [ ] Band/mode breakdown charts (QSOs by band)
- [ ] County activation map (heat map of NY counties)
- [ ] Year-over-year comparison data
- [ ] Rate charts (QSOs per hour for top stations)
- [ ] Dark mode toggle
- [ ] Export tables to CSV

---

## About the NYQP

The **New York QSO Party** is an annual amateur radio contest encouraging contacts with stations in New York State. In-state operators exchange their county, while out-of-state and DX participants exchange their state/province/country. The contest runs for 12 hours on the third full weekend of October.

For more information, visit the [NYQP website](https://nyqp.org).

---

## License

This project is provided for the benefit of the amateur radio community. Contest data is sourced from submitted logs and official results.
