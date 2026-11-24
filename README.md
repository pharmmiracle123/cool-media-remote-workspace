# Cool Media Remote Workspace

**Advertising × Freelance Collaboration Platform**

A modern, animated frontend inspired by the aesthetic of cool.co — adapted for an advertising company that partners with freelance platforms.

## Concept

- You are an **advertising company** (Cool Media Remote Workspace), not a pure freelance marketplace.
- You collaborate with freelance partners through platforms such as **Micro1**, **Mecocagen**, and **Outliner**.
- Freelancers must **sign up to Micro1** (primary payout partner).
- They pay a **one-time $100 enrollment fee** to receive a digital **Membership Card / Badge** attached to their profile.
- Once enrolled they can see:
  - **Available** projects
  - **Pending** projects
  - **Completed** projects

## Pages

| File | Description |
|------|-------------|
| `index.html` | Landing page with hero, particles, features, how-it-works, membership preview, partners |
| `dashboard.html` | Project dashboard (Available / Pending / Completed tabs) |
| `membership.html` | $100 enrollment + membership card preview |
| `signup.html` | Account creation (leads to membership) |
| `login.html` | Authentication |

## Design & Animations

- Dark theme with orange → teal gradient accents
- Canvas particle background
- Scroll-triggered reveals
- Hover elevations & glow effects
- Animated membership card
- Smooth tab switching on dashboard
- Responsive layout

## How to run

Simply open `index.html` in a modern browser, or serve the folder with any static server:

```bash
npx serve .
# or
python -m http.server 8080
```

## Tech

- Pure HTML / CSS / Vanilla JS
- Google Fonts (Inter + Space Grotesk)
- No build step required

---

© 2025 Cool Media Remote Workspace — Demo frontend for advertising + freelance partner model.
