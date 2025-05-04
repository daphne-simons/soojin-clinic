# Soojin Clinic
## Acupuncture Practice Management Software 

A private, secure acupuncture practice management system. 

## Tech Stack

Frontend:

- React + TypeScript (familiar to you and provides type safety)
- React Query for efficient data fetching and caching
- Tailwind CSS for rapid UI development

Backend:

- Express.js + Node.js (leverage your existing knowledge)
- TypeORM instead of Knex (provides better TypeScript integration)

Database:

- PostgreSQL (more robust than SQLite for production)
  - For local deployment: PostgreSQL can be installed directly on the client's machine
  - For nearby server: PostgreSQL on a NZ-based hosting provider

Authentication:

- Passport.js with local strategy
- JWT (JSON Web Tokens) for session management

## Deployment Options 

- Local-only deployment:
  - Electron.js to package as desktop application
  - Local PostgreSQL instance
  - Regular automated backups

- Server-based in NZ:
  - NZ-based hosting (e.g., Web Drive, Umbrellar, or Amazon AWS Sydney region)
  - VPN access for enhanced security

## Security Considerations

- Data Encryption:
  - Encryption at rest: PostgreSQL column-level encryption for sensitive data
  - Encryption in transit: HTTPS/TLS for all communications
  - Consider encrypted database backups


- Authentication & Authorization:
  - Role-based access control (practitioners vs. admin)
  - Strong password policies
  - Session timeout settings
  - Audit logging of all access

- NZ Privacy Compliance:
  - Follow NZ Privacy Act 2020 requirements
  - Implement Health Information Privacy Code provisions
  - Document all security measures for potential audits


- Additional Security:
  - Regular security updates
  - Intrusion detection if server-based
  - Application-level data validation
  - Regular penetration testing

# Core Feature Tickets

## Epic: Setup & Infrastructure

### SETUP-1: Project Initialization

**Description:** Set up the initial project structure with React, TypeScript, Express, and build configurations.

**Tasks:**

Data Security Implementation Details

1. Local Machine Deployment
If storing data on the client's local machine:

Use Electron.js to package your web application into a desktop app
Store PostgreSQL database locally with encryption
Implement file-level encryption for the data directory
Set up automated, encrypted backups to external media

2. Nearby Server Option
If using a NZ-based server:

Choose a NZ data center (meets NZ Privacy Act requirements)
Implement VPN access for practice staff only
Use disk encryption on the server
Configure firewall rules to limit access by IP address

3. Database Security

Encrypt sensitive columns using pgcrypto extension
Store encryption keys separately from the database
Implement row-level security policies
Use parameterized queries exclusively to prevent SQL injection

4. Authentication Implementation

Use bcrypt for password hashing (not MD5/SHA)
Implement JWT with appropriate expiration
Store refresh tokens in HTTP-only cookies
Create separate user roles with least-privilege permissions

## Development Approach - iterative:

- [ ] Start with core patient management and scheduling
- [ ] Add clinical notes functionality
- [ ] Implement basic reporting
- [ ] Add billing/invoicing features last

This allows the practice to start using the system earlier while more complex features are still in development.
The detailed tickets I've created cover all these requirements and provide a structured development roadmap. 
ddd
