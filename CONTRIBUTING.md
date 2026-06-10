# CONTRIBUTING.md

# Contributing to FarmConnect

Thank you for your interest in contributing to FarmConnect! 

FarmConnect is an open-source platform that connects farmers directly with consumers, helping create a transparent and efficient agricultural marketplace.

We welcome contributions from developers, designers, testers, and documentation writers.

---

# Table of Contents

1. Code of Conduct
2. Getting Started
3. Development Setup
4. Branching Strategy
5. Coding Standards
6. Commit Guidelines
7. Pull Request Process
8. Testing Requirements
9. Documentation Requirements
10. Reporting Issues
11. Feature Requests

---

# Code of Conduct

By participating in this project, you agree to:

* Be respectful and professional.
* Provide constructive feedback.
* Help maintain a welcoming environment.
* Respect different viewpoints and experiences.
* Focus on improving the project.

---

# Getting Started

## Fork the Repository

Click the **Fork** button on GitHub.

## Clone Your Fork

```bash
git clone https://github.com/your-username/farmconnect.git
cd farmconnect
```

## Add Upstream Repository

```bash
git remote add upstream https://github.com/original-owner/farmconnect.git
```

Verify remotes:

```bash
git remote -v
```

---

# Development Setup

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux/macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start server:

```bash
python manage.py runserver
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# Branching Strategy

Always create a new branch before starting work.

## Feature Branch

```bash
git checkout -b feature/product-search
```

## Bug Fix Branch

```bash
git checkout -b bugfix/login-error
```

## Documentation Branch

```bash
git checkout -b docs/update-user-manual
```

## Testing Branch

```bash
git checkout -b test/order-api
```

---

# Coding Standards

## General Rules

* Write clean and readable code.
* Follow project folder structure.
* Keep functions modular and reusable.
* Avoid duplicate code.
* Use meaningful variable names.

---

## Frontend Standards

### React

* Use Functional Components.
* Use Hooks instead of Class Components.
* Separate business logic from UI.
* Keep components reusable.

### Styling

* Use Tailwind CSS.
* Ensure responsive design.
* Maintain consistent spacing and layout.

---

## Backend Standards

### Django

* Follow PEP8 conventions.
* Use serializers for API responses.
* Validate all user input.
* Handle exceptions properly.

### API Design

* Follow RESTful principles.
* Return proper HTTP status codes.
* Use meaningful error messages.

---

# Commit Message Guidelines

Use clear commit messages.

## Examples

Feature:

```text
feat: add product search functionality
```

Bug Fix:

```text
fix: resolve login validation issue
```

Documentation:

```text
docs: update API documentation
```

Testing:

```text
test: add product API tests
```

Refactor:

```text
refactor: improve order service performance
```

---

# Pull Request Process

Before creating a pull request:

## Checklist

* Code builds successfully.
* Tests pass successfully.
* Documentation is updated.
* No unnecessary files included.
* Feature has been manually tested.

---

## Pull Request Template

### Description

Provide a brief description of changes.

### Type of Change

* Feature
* Bug Fix
* Documentation
* Refactor
* Test

### Testing

Describe how changes were tested.

### Screenshots

Attach screenshots if UI changes were made.

---

# Testing Requirements

All contributors must ensure:

* Unit tests pass.
* Integration tests pass.
* API tests pass.
* No critical bugs introduced.

Minimum target coverage:

```text
80%+
```

---

# Documentation Requirements

Update documentation when:

* New features are added.
* APIs are modified.
* User workflows change.
* Configuration changes occur.

Documentation files include:

* README.md
* USER_MANUAL.md
* API Documentation
* Deployment Guides

---

# Reporting Issues

Before creating a new issue:

1. Search existing issues.
2. Verify the issue is reproducible.

Include:

* Clear title
* Description
* Steps to reproduce
* Expected behavior
* Actual behavior
* Screenshots (if applicable)

---

# Feature Requests

Feature requests should include:

* Problem statement
* Proposed solution
* Expected impact
* Mockups (optional)

---

# Recognition

All meaningful contributions are appreciated and help improve FarmConnect for farmers and consumers.

Thank you for contributing to FarmConnect!

Happy Coding!
