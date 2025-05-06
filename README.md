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

