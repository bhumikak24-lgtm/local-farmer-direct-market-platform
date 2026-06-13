# Specification: Compliance Integration

## Description
This specification outlines the integration of the Swecha GitLab Compliance suite into the Local Farmer Direct Market Platform.

## Requirements
- AGPLv3 License implementation.
- Full Spec-Kit setup.
- Comprehensive linting (ESLint, Prettier, Biome, Oxlint, Knip).
- Security scanning (Gitleaks, npm audit).
- Testing with Vitest and coverage reporting.
- Automated changelog with Git-Cliff.
- Standardized GitLab CI pipeline.

## Implementation
- Root `package.json` to manage all tools.
- Husky hooks for pre-commit validation.
- Unified CI/CD stages.
