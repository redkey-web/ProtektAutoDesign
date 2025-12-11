---
type: backend-working
status: pending
project: ProtektAutoDesign
created: 2025-12-11
updated: 2025-12-11
---

# Backend Work: ProtektAutoDesign

## Overview

- **Frontend Status**: Pending (migration in progress)
- **Backend Status**: Deferred
- **Services Needed**: SendGrid (email), Turnstile (spam protection)

---

## Phase B: Service Connections

### SendGrid Email
- [ ] Install @sendgrid/mail
- [ ] Create src/lib/email/sendgrid.ts
- [ ] Create API route: src/app/api/contact/route.ts
- [ ] Add SENDGRID_API_KEY to .env.example
- [ ] Test locally
- [ ] Set env var in Vercel

**Files to create:**
- `src/lib/email/sendgrid.ts`
- `src/app/api/contact/route.ts`

**Reference**: `webdev/services/email/SENDGRID.md`

### Turnstile Spam Protection
- [ ] Install @marsidev/react-turnstile
- [ ] Create Turnstile component
- [ ] Integrate with ContactSection
- [ ] Add server-side verification to API route
- [ ] Add TURNSTILE_* env vars
- [ ] Test locally
- [ ] Set env vars in Vercel

**Files to create:**
- `src/components/Turnstile.tsx`
- Update: `src/app/api/contact/route.ts` (add verification)

**Reference**: `webdev/services/cloudflare/TURNSTILE.md`

### Quote Calculator Backend (Optional)
- [ ] Create API route: src/app/api/quote/route.ts
- [ ] Add email notification for quotes
- [ ] Consider storing quotes in database

---

## Phase C: Infrastructure

### DNS Configuration
- [ ] Add domain in Vercel
- [ ] Get DNS records from Vercel
- [ ] Configure in Cloudflare (or registrar)
- [ ] Wait for propagation (~15-60 min)
- [ ] Verify SSL certificate

**Reference**: `webdev/deploy/DNS_CONFIGURATION.md`

### SendGrid Domain Authentication
- [ ] Add domain in SendGrid
- [ ] Get CNAME records for:
  - em.domain.com
  - s1._domainkey.domain.com
  - s2._domainkey.domain.com
- [ ] Add records to DNS
- [ ] Verify in SendGrid
- [ ] Test email delivery

**Reference**: `webdev/services/email/DOMAIN_AUTH.md`

### Environment Variables
| Variable | Local | Vercel |
|----------|-------|--------|
| SENDGRID_API_KEY | [ ] | [ ] |
| TURNSTILE_SECRET_KEY | [ ] | [ ] |
| NEXT_PUBLIC_TURNSTILE_SITE_KEY | [ ] | [ ] |

---

## Deferred Items from Migration

| Item | Type | Notes |
|------|------|-------|
| Contact form submission | Form → Email | UI ported, needs API route + SendGrid |
| Quote calculator submission | Form → ? | UI ported, consider email notification |
| Spam protection | Security | Add Turnstile to forms |

---

## Verification Checklist

- [ ] Contact form submits successfully
- [ ] Email received (check spam folder)
- [ ] Turnstile challenge appears
- [ ] Spam protection blocking bots
- [ ] No console errors
- [ ] Production deployment works
- [ ] All env vars set in Vercel
- [ ] Domain email authentication verified

---

## Notes

The contact form currently shows an alert on submission. The backend work will:
1. Replace alert with actual API call
2. Add loading state during submission
3. Show success/error toast messages
4. Integrate Turnstile for spam protection

Quote calculator just shows an alert with the quote. Backend options:
- Send quote via email
- Store in database
- Just send notification to business

---

Last Updated: 2025-12-11
