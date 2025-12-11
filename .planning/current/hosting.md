# Hosting Configuration

**Last Updated**: 2025-12-11

## Platform
- **Provider**: Vercel (planned)
- **Project ID**: Not linked yet
- **Team**: -

## Current Hosting (Pre-Migration)
- **Platform**: Replit
- **URL**: TBD (Replit deployment)

## Domains
| Domain | Status | Type |
|--------|--------|------|
| - | Not configured | - |

## Environment Variables
| Variable | Set In | Description |
|----------|--------|-------------|
| DATABASE_URL | .env | Neon PostgreSQL connection |
| SENDGRID_API_KEY | Pending | Email service API key |
| TURNSTILE_SECRET_KEY | Pending | Spam protection secret |
| NEXT_PUBLIC_TURNSTILE_SITE_KEY | Pending | Spam protection site key |

## Deployment History
| Date | Type | Status |
|------|------|--------|
| - | - | - |

## Vercel Configuration (To Be Set)

### Build Settings
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Environment Variable Groups
- Production: TBD
- Preview: TBD
- Development: Local .env

## DNS (When Ready)

### Vercel DNS Records (Example)
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

### SendGrid DNS Records (Example)
| Type | Name | Value |
|------|------|-------|
| CNAME | em | u123456.wl.sendgrid.net |
| CNAME | s1._domainkey | s1.domainkey.u123456.wl.sendgrid.net |
| CNAME | s2._domainkey | s2.domainkey.u123456.wl.sendgrid.net |
