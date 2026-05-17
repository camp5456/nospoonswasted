# Blog Post Publishing Checklist
## AEO + Schema for No Spoons Wasted

---

## Front Matter

- [ ] `title:` — written as a clear, specific question or answer (e.g. *"How to Manage Fatigue with Lupus"* not *"My Fatigue Journey"*)
- [ ] `description:` — 1–2 sentences that directly answer what the post is about; this is what AI engines quote
- [ ] `date:` — correct publish date
- [ ] `author: Twila` — or full guest author block (see below)
- [ ] `image:` — hero image path
- [ ] `image_alt:` — descriptive alt text (what's literally in the image)
- [ ] `tags:` — at least one relevant tag
- [ ] `faq:` — at least 3–5 Q&A pairs (see FAQ section below)
- [ ] Is this a tutorial or step-by-step post? Add `how_to:` block (see HowTo section below)

**Guest author fields (only when not Twila):**
```yaml
author: Guest Name
author_bio: One or two sentences about them.
author_avatar: /images/guest-photo.jpg
author_url: https://theirsite.com
```

---

## FAQ Schema (`faq:` in front matter)

Aim for **3–7 questions** per post. These power the FAQPage schema that AI engines read.

```yaml
faq:
  - q: "Write the question exactly as someone would type or say it"
    a: "Answer in 1–3 sentences. Be direct — lead with the answer, then explain."
  - q: "Another natural-language question"
    a: "Another direct answer."
```

**Tips:**
- [ ] Questions match real search queries ("Can you...?", "What is...?", "How do I...?")
- [ ] Answers are self-contained — they make sense read alone, out of context
- [ ] The FAQ answers **do not have to be word-for-word identical** to the post body, but should be consistent
- [ ] At least one FAQ addresses the core premise of the post directly

---

## HowTo Schema (`how_to:` in front matter)

Add this to any post that walks through a process — lifehacks, tutorials, routines, recipes with method steps. It tells AI engines this is an instructional page.

```yaml
how_to:
  name: "How to shower with chronic fatigue"
  description: "A step-by-step method for bathing on low-energy days."
  steps:
    - "Set out everything you need before entering the bathroom"
    - "Use a shower stool so you can sit while washing"
    - "Keep soap and shampoo at arm level — no reaching up"
    - "Dry off sitting on the toilet lid or a stool"
```

**Tips:**
- [ ] Steps are written as actions, not descriptions ("Do X" not "X is done by...")
- [ ] Each step is one discrete action — don't bundle two things into one step
- [ ] `name:` matches or closely echoes the post title
- [ ] `description:` is one sentence that answers what the reader will be able to do

---

## Content

- [ ] First 100–150 words directly answer the implied question of the title — don't bury the lede
- [ ] Use H2/H3 headers phrased as questions or clear statements (AI engines use these as citation anchors)
- [ ] Include at least one specific, quotable claim or statistic with a named source linked out
- [ ] Personal experience is a citation strength — name the condition, the symptom, the situation specifically
- [ ] Avoid vague openers ("In today's world...", "Many people struggle with...")
- [ ] Bold the key takeaway in each section

**Formatting AI engines parse well:**
- [ ] Numbered lists for processes and steps
- [ ] Comparison tables for products and substitutions
- [ ] Bulleted lists for ingredients, symptoms, options
- [ ] FAQ block at the bottom of every substantive post

**For citations by AI engines:**
- [ ] Write at least one paragraph that could stand alone as a quoted excerpt — clear subject, claim, and why it matters
- [ ] Reference studies or experts by name in the sentence (not just a hyperlink)

---

## Schemas That Fire Automatically

These are handled by the site — just verify the front matter fields above are filled in.

| Schema | Triggers when... |
|---|---|
| **Article** | Every post (always on) |
| **Person** | Every post (always on, uses `author:` front matter) |
| **FAQPage** | `faq:` is present in front matter |
| **HowTo** | `how_to:` is present in front matter |
| **Organization** | Every page via footer |
| **Author bio block** | `author:` is present in front matter |
| **Newsletter CTA** | Every post (always on) |

---

## Before You Hit Publish

- [ ] Read the post description aloud — does it directly answer the title?
- [ ] Check that FAQ answers are accurate and match the post content
- [ ] Hero image has a descriptive `image_alt` (not just the filename)
- [ ] Guest post? All four author fields filled in (`author`, `author_bio`, `author_avatar`, `author_url`)
- [ ] Tutorial post? `how_to:` block is present and steps are action-phrased
- [ ] Preview the post locally and check the bio section rendered correctly
- [ ] Quarterly refresh: add a new tip, update any product links, bump `last_modified_at:` date

---

## Pillar Pages (One-Time — Build in Priority Order)

These are cornerstone definitional pages. They won't rank immediately but become AI-citation magnets and the internal-linking spine of the site. Link to them from relevant posts as you write.

- [ ] **What is spoon theory?** — explain in your words, link to Christine Miserandino's original essay, give modern examples. *Highest priority.*
- [ ] **What is a spoonie?** — community, history, who uses the term, how it has expanded.
- [ ] **What does "low spoon" mean?** — practical definition with day-to-day examples.
- [ ] **How to plan meals with chronic fatigue** — use the HowTo schema on this one.
- [ ] **What to keep in a spoonie pantry** — use a comparison table and bulleted list format.

**For each pillar page:**
- [ ] Add `faq:` front matter with 5+ questions
- [ ] Add `how_to:` if it's a process page
- [ ] Link to it from at least 2–3 existing posts where the term appears
- [ ] Link it to the other pillar pages to form a cluster
- [ ] Consider adding "Start Here" or "Spoonie Basics" to the nav and linking all five from there
