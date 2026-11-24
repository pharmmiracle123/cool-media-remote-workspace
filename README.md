# Cool Media Remote Workspace

**Advertising × Freelance Collaboration Platform**

Modern animated frontend inspired by cool.co aesthetics — for an advertising company that partners with freelance platforms.

## Concept

- **Cool Media Remote Workspace** is an advertising company (not a pure freelance marketplace).
- Partners: **Micro1** (primary payout), **Mecor**, **Outliner**.
- Freelancers must register on Micro1: https://www.talent.micro1.ai/register
- **Enrollment: USD 206** (one-time) covers:
  - Membership badge & verified profile
  - One-on-one tutor (platform navigation + workflow)
  - Premium tools access
  - Weekly Zoom meetings
  - Workflow training across collaborative platforms
  - Weekly development updates
- Application flow: copy professional message → open **Customer Care** (Smartsupp live chat) → paste & send
- Dashboard: Available / Pending / Completed projects

## Pages

| File | Description |
|------|-------------|
| `index.html` | Landing — hero, particles, orbs, features, partners |
| `membership.html` | USD 206 package, benefits, application message + copy, chat CTA |
| `dashboard.html` | Project tabs |
| `signup.html` / `login.html` | Auth demos |

## Customer Care Chat

**Smartsupp** live chat is installed site-wide with key  
`9b1950efa201891f8fa562d1e968ddcc2f2cd982`.

The floating Smartsupp widget appears bottom-right on every page.  
On the Membership page, “Open Customer Care Chat” calls `smartsupp('chat:open')`.

## Run

Open `index.html` or:

```bash
npx serve .
```

## Tech

HTML / CSS / Vanilla JS · Google Fonts · Canvas particles · Ambient orbs · Scroll reveals · Smartsupp

---

© 2025 Cool Media Remote Workspace
