# Local Farmer Direct Market Platform

A decentralized marketplace connecting local farmers directly with consumers.

## Features
- **Direct Trading**: Bypass middlemen and save costs.
- **Farmer Dashboard**: Manage products, inventory, and sales.
- **Consumer Marketplace**: Browse local produce with geo-location.
- **Secure Payments**: Integrated payment gateway.
- **Order Tracking**: Real-time updates on delivery status.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS.
- **Backend**: Django REST Framework + PostgreSQL.
- **Security**: JWT Authentication, Gitleaks scanning.
- **CI/CD**: GitLab CI with automated linting, testing, and compliance checks.

## Installation

### Prerequisites
- Node.js v20+
- Python 3.12+
- Docker (optional)

### Setup
```bash
# Clone the repository
git clone <repo-url>
cd local-farmer-direct-market-platform

# Install root dependencies
npm install

# Setup Frontend
cd frontend
npm install

# Setup Backend
cd ../backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Environment Variables
Create a `.env` file in `backend/` and `frontend/` based on `.env.example`.

## Running the Project

### Frontend
```bash
cd frontend
npm run dev
```

### Backend
```bash
cd backend
python manage.py runserver
```

## Testing
```bash
npm run test
npm run coverage
```

## CI/CD
Our pipeline includes:
- **Lint**: ESLint check.
- **Format**: Prettier check.
- **Test**: Vitest execution.
- **Type Check**: TypeScript `tsc --noEmit`.
- **Audit**: `npm audit` for dependencies.

## Security
We use `gitleaks` for secret detection and `npm audit` for dependency security.

## Contributing
Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details. All features require a spec in `specs/`.

## License
Licensed under [AGPLv3](LICENSE).
## Compliance
This project follows GitLab compliance standards.