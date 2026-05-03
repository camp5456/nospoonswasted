# No Spoons Lifehacks — brand guide

## About the brand

A practical lifehacks and recipe blog for the chronic illness community (spoonies). The tone is warm, a little dry, and genuinely helpful — like a knowledgeable friend who gets it. Not clinical. Not toxic positivity. Think: the person who shows up with soup and a useful tip.

---

## Color palette

All pairs are WCAG 2.1 AA accessible.

| Role | Hex | Accessible on |
|------|-----|---------------|
| Primary (H1, H2, nav bg) | `#a3485b` | white `#ffffff` |
| Secondary (H3, H4) | `#d17082` | black `#000000` |
| Accent / section bands / tags | `#e5aab4` | black `#000000` |
| Links | `#18807e` | white `#ffffff` |
| Buttons / CTAs | `#2faaa7` | black `#000000` |
| Page background | `#faf7f8` | — |
| Body text | `#1a1a1a` | — |
| Muted text | `#555555` | — |

### CSS variables (paste into main stylesheet)

```css
:root {
  --color-primary:      #a3485b;
  --color-primary-mid:  #d17082;
  --color-accent:       #e5aab4;
  --color-link:         #18807e;
  --color-btn:          #2faaa7;
  --color-bg:           #faf7f8;
  --color-text:         #1a1a1a;
  --color-text-muted:   #555555;
  --font-heading:       'Lora', Georgia, serif;
  --font-body:          'Nunito', system-ui, sans-serif;
  --font-ui:            'DM Sans', system-ui, sans-serif;
}
```

---

## Typography

### Google Fonts import

```html
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;1,400&family=Nunito:wght@400;500&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

### Type scale

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| H1 | Lora | 2rem | 600 | `#a3485b` |
| H2 | Lora | 1.6rem | 600 | `#a3485b` |
| H3 | Lora | 1.25rem | 400 | `#d17082` |
| H4 | Lora | 1.1rem | 400 | `#d17082` |
| Body | Nunito | 1rem | 400 | `#1a1a1a` |
| Links | DM Sans | inherit | 400 | `#18807e` |
| Buttons | Nunito | 0.9rem | 600 | white on `#2faaa7` |
| Tags / labels | DM Sans | 0.75rem | 500 | black on `#e5aab4` |
| Captions / meta | DM Sans | 0.8rem | 400 | `#555555` |

### Body copy style

- Line height: 1.75
- Max content width: 680px
- Generous whitespace between sections — audience includes people with brain fog and visual fatigue

### Blockquote style

- Font: Lora italic
- Color: `#555555`
- Left border: 3px solid `#e5aab4`
- Padding-left: 1rem

---

## UI components

### Buttons

```css
.btn {
  background: #2faaa7;
  color: #000000;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  border: none;
}
.btn:hover {
  background: #18807e;
  color: #ffffff;
}
```

### Tags / category pills

```css
.tag {
  background: #e5aab4;
  color: #000000;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 20px;
}
```

### Post card

- White background
- Subtle border: `1px solid #e5aab4`
- Border radius: 12px
- Header band: `#a3485b` with white title text
- Body: `#faf7f8` background

---

## Logo

- Character: kawaii spoon with large expressive eyes, lashes, brows, rosy cheeks, and a small smile
- Background: teal (`#2faaa7`) — square version (Image 1) and circle-cropped version (Image 2)
- Handle: deep purple (`#3d2060` approx)
- Spoon outline: dark purple stroke on white fill
- Two versions exist:
  - **Square** — full teal background, spoon fills frame edge to edge. Use for website header, favicon, Open Graph images
  - **Circle crop** — teal circle on white/transparent background. Use for Instagram profile pic, Twitter/X, any circular avatar crop
- The spoon character is the standalone icon — no wordmark embedded in the logo
- Wordmark ("no spoons" or "no.spoons_lifehacks") is a separate text-only treatment used alongside the icon in headers and marketing materials
- Primary social profile image: circle crop version

---

## Voice and tone

- Warm, direct, occasionally dry
- First person, conversational — not formal
- Practical first, emotional second
- Never toxic positivity ("you got this!")
- Never clinical or overly medical
- Humor is low-key and relatable ("no standing, no drama")
- Audience has limited energy — keep sentences and paragraphs short

---

## Content pillars

1. Recipes — low-effort, high-reward, real ingredients
2. Life hacks — shortcuts for daily tasks on low-energy days
3. Product recommendations — honest, with Amazon affiliate links
4. Community / relatable moments — validation without wallowing

---

## Accessibility notes

- All color pairs are WCAG 2.1 AA compliant
- Body text minimum 16px
- Line height minimum 1.6 (1.75 preferred)
- Never rely on color alone to convey meaning
- Alt text required on all images
