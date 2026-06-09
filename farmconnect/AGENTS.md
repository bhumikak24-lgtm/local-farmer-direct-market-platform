# 🤖 FarmConnect – Agent Responsibilities

## 🧑‍🌾 Backend Agent

### Responsibilities
- Build REST APIs for FarmConnect
- Handle authentication (farmer / buyer)
- Manage product and order logic
- Connect database (SQLite/PostgreSQL)
- Implement business rules (pricing, stock updates)

### Tasks
- Create `/api/products`, `/api/orders`, `/api/auth`
- Validate all incoming requests
- Ensure data consistency
- Handle error responses

### Tech Stack
- Python (Flask / FastAPI)
- SQL / SQLite
- Postman for API testing

---

## 🧑‍💻 Frontend Agent

### Responsibilities
- Build user interface for farmers and buyers
- Design dashboards (Farmer / Buyer)
- Integrate APIs with frontend
- Ensure responsive design

### Tasks
- Login / Signup pages
- Product listing page
- Cart & order UI
- Display live pricing updates

### Tech Stack
- HTML, CSS, JavaScript (or React)
- Fetch API / Axios
- UI libraries (optional)

---

## 🧪 Testing Agent (Shared Role)

### Responsibilities
- Test API endpoints
- Check frontend UI flow
- Validate order flow end-to-end

### Tasks
- Unit testing for backend
- Manual testing for UI
- Integration testing (API ↔ UI)

---

## 📄 Documentation Agent (Shared Role)

### Responsibilities
- Maintain README and specs
- Update USER_MANUAL
- Prepare hackathon presentation

---

## 🤝 Team Collaboration Rules
- Use Git branches (`feature/*`)
- Daily sync on progress
- Merge only tested code