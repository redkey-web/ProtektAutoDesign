# Installed Services

**Last Updated**: 2025-12-11

## Active Services
None yet - migration in progress

## Planned Services

### Email: SendGrid
- **Status**: Planned (Phase B)
- **Purpose**: Contact form email delivery
- **Env Vars**: SENDGRID_API_KEY
- **Files to Create**:
  - src/lib/email/sendgrid.ts
  - src/app/api/contact/route.ts
- **Reference**: webdev/services/email/SENDGRID.md

### Spam Protection: Cloudflare Turnstile
- **Status**: Planned (Phase B)
- **Purpose**: Protect contact form from spam
- **Env Vars**:
  - TURNSTILE_SECRET_KEY (server)
  - NEXT_PUBLIC_TURNSTILE_SITE_KEY (client)
- **Files to Create**:
  - src/components/Turnstile.tsx
  - src/lib/spam-protection.ts
- **Reference**: webdev/services/cloudflare/TURNSTILE.md

## Service Integration Status

| Service | Package | Env Vars | API Route | Frontend | Verified |
|---------|---------|----------|-----------|----------|----------|
| SendGrid | [ ] | [ ] | [ ] | [ ] | [ ] |
| Turnstile | [ ] | [ ] | [ ] | [ ] | [ ] |

## Existing Integrations

### Database: Neon PostgreSQL
- **Status**: Exists in source
- **Purpose**: Blog posts storage
- **Env Vars**: DATABASE_URL
- **Migration Decision**: TBD (keep or convert to static)

### Query Client: TanStack Query
- **Status**: Exists in source
- **Purpose**: Data fetching/caching
- **Migration Decision**: Keep for client-side data fetching
