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
`1f700be20e1bc02c7752f7565e0a8723b743918b`.

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

## Dropdown menu (fixed)

- A single handler in `js/main.js` controls the dropdown on every page (open/close on tap, closes on link tap, outside tap, or Esc).
- The duplicate handler in `index.html` was removed (two handlers cancelled each other out, so the menu never opened).
- The broken chat-script tail of `index.html` was repaired.
