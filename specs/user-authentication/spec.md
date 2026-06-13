# Specification: User Authentication

## Metadata
- **Author**: Gemini CLI
- **Date**: 2026-06-13
- **Status**: Approved
- **Related Issues**: #10

## Description
Implements a secure, JWT-based authentication system for both Farmers and Consumers.

## Goals
- Secure login and registration.
- Role-based access control (Farmer vs. Consumer).
- Token refresh mechanism.

## Acceptance Criteria
- [ ] User can register with email and password.
- [ ] User can login and receive a JWT.
- [ ] Protected routes are inaccessible without a valid token.
- [ ] Token expires after 1 hour; refresh token lasts 7 days.

## Implementation Notes
- Use Django REST Framework SimpleJWT on the backend.
- React Context API to manage auth state on the frontend.
- Securely store tokens in `HttpOnly` cookies.
