# AGENTS.md

# FarmConnect Agent Guidelines

## Overview

FarmConnect is a Direct Farmer-to-Consumer Marketplace designed to eliminate intermediaries and create a transparent agricultural ecosystem. This document defines the responsibilities, workflows, and collaboration guidelines for all project agents.

---

# Project Vision

To empower farmers by providing a digital platform where they can directly connect with consumers, sell agricultural products, receive fair prices, and build long-term customer relationships.

---

# Agent Roles

## Frontend Agent

### Purpose

Responsible for developing and maintaining the user-facing application.

### Responsibilities

* Build responsive user interfaces
* Implement reusable React components
* Manage client-side routing
* Integrate frontend with backend APIs
* Handle form validation and error management
* Ensure accessibility and responsive design

### Deliverables

* React Components
* Page Layouts
* Dashboard Interfaces
* Marketplace Views
* User Authentication Screens

### Technologies

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios

---

## Backend Agent

### Purpose

Responsible for business logic, API development, authentication, and server-side operations.

### Responsibilities

* Design and implement REST APIs
* Handle authentication and authorization
* Implement business rules
* Manage product, order, and review workflows
* Ensure application security
* Maintain server performance

### Deliverables

* REST API Endpoints
* Authentication System
* Business Logic Modules
* API Documentation

### Technologies

* Django
* Django REST Framework
* JWT Authentication
* PostgreSQL

---

## Database Agent

### Purpose

Responsible for data architecture, storage, and integrity.

### Responsibilities

* Design database schema
* Create migrations
* Maintain data consistency
* Optimize database queries
* Implement backup strategies

### Deliverables

* Database Schema
* Migration Scripts
* Seed Data
* Query Optimization Reports

### Technologies

* PostgreSQL
* Django ORM

---

## Testing Agent

### Purpose

Responsible for ensuring software quality and reliability.

### Responsibilities

* Develop unit tests
* Create integration tests
* Perform API testing
* Execute performance testing
* Track bug reports

### Deliverables

* Test Cases
* Automated Test Suites
* Performance Reports
* Bug Reports

### Technologies

* Pytest
* Django Test Framework
* Postman

---

## Documentation Agent

### Purpose

Responsible for maintaining all project documentation.

### Responsibilities

* Create technical documentation
* Maintain API documentation
* Update user manuals
* Document deployment procedures
* Maintain project specifications

### Deliverables

* README
* User Manual
* API Documentation
* Deployment Guide

---

## DevOps Agent

### Purpose

Responsible for deployment and infrastructure management.

### Responsibilities

* Configure deployment pipelines
* Manage environments
* Monitor application health
* Configure CI/CD workflows

### Deliverables

* Deployment Scripts
* Environment Configurations
* CI/CD Pipelines

### Technologies

* GitHub Actions
* Docker
* Render
* Vercel

---

# Collaboration Workflow

## Step 1: Requirement Analysis

* Review project specifications
* Understand feature requirements
* Identify dependencies

## Step 2: Development

* Create feature branch
* Implement assigned tasks
* Follow coding standards

## Step 3: Testing

* Run unit tests
* Execute integration tests
* Validate feature functionality

## Step 4: Documentation

* Update relevant documentation
* Document API changes
* Update user instructions

## Step 5: Review

* Submit pull request
* Address review comments
* Obtain approval

## Step 6: Merge

* Merge into main branch
* Verify deployment

---

# Coding Standards

## General Guidelines

* Write clean and maintainable code
* Use meaningful variable names
* Avoid code duplication
* Follow project architecture
* Add comments when necessary

## Frontend Standards

* Use functional React components
* Keep components reusable
* Use consistent styling
* Implement proper error handling

## Backend Standards

* Follow RESTful API principles
* Validate all incoming data
* Implement proper exception handling
* Use serializers for API responses

## Database Standards

* Normalize database tables
* Use indexes where appropriate
* Maintain referential integrity

---

# Branch Naming Convention

Feature:
feature/product-management

Bug Fix:
bugfix/order-validation

Documentation:
docs/api-updates

Testing:
test/authentication-module

---

# Commit Message Convention

Feature:
feat: add product search functionality

Bug Fix:
fix: resolve login authentication issue

Documentation:
docs: update user manual

Testing:
test: add order API test cases

Refactor:
refactor: optimize product service

---

# Quality Requirements

* Minimum 80% test coverage
* No critical security vulnerabilities
* All pull requests reviewed
* Documentation updated for every major change
* Production-ready code before merge

---

# Success Criteria

The FarmConnect project will be considered successful when:

* Farmers can successfully list products
* Consumers can browse and purchase products
* Orders are processed accurately
* Reviews and ratings function correctly
* Notifications are delivered properly
* The platform remains secure, scalable, and user-friendly

