# Shopping App (minimal)


This is a small demo Shopping App (backend + frontend) — built for learning and to match the *solar-system* repo structure.


## Features
- Node.js + Express backend
- `/products` API returning JSON
- Single-file frontend `index.html` showing catalog
- OpenAPI spec (`oas.json`)
- Tests (`app-test.js`) using Jest + Supertest
- Dockerfile for containerizing


## Quick start (WSL2)


1. Clone or create repo in WSL2:
```bash
mkdir shopping-app && cd shopping-app
# create files (copy from this repo)
npm install
npm start
