# Unlock The Psyche — Design Direction & Implementation Notes

## 1. Visual direction
Editorial psychology practice + premium education platform. Warm, private, evidence-oriented, human, sophisticated and calm. The reference screenshots inform composition, whitespace, natural color, large type and immersive photography, but no exact logo, copy, layout or branding is reproduced.

## 2. Information architecture
Primary navigation:
- About
- Therapy
- Courses
- Resources
- FAQ
- Contact
- Persistent primary CTA: Book a Consultation

Secondary pages:
- Specializations / Concerns
- How Therapy Works
- Course Details
- Book a Consultation
- Privacy / Terms / Professional Disclaimers

## 3. Page hierarchy
Home → orient two audiences → establish professional credentials → explain therapy → explain process → introduce course pathway → resources → booking.
Therapy → services → concerns → process → booking.
Courses → course overview → curriculum → learning outcomes → assessment → certification → enrollment.
Contact/Booking → practical details and low-sensitivity forms.

## 4. Design system
Palette:
- Warm Ivory #F4F0E8 — primary page background
- Paper #FAF8F3 — elevated surfaces
- Muted Sage #66705D — secondary color
- Deep Olive #30382F — dark sections / trust
- Warm Sand #D9CCB8 and #E7DED0 — supporting backgrounds
- Muted Terracotta #9A5D4B — CTA/accent
- Deep Charcoal #2B2A27 — primary text
- Muted #68675F — secondary text
- Line #D8D2C7 — borders

Typography:
- Display: Cormorant Garamond, 500–700
- UI/body: DM Sans, 400–700
- Large headlines use tight leading; body copy stays highly readable.

## 5. Components
Header, hero, credential strip, pathway cards, editorial split, service cards, concern grid, process timeline, course panels, article cards, FAQ accordions, forms, footer, placeholder media blocks.

## 6. Imagery direction
Use approved professional photography first. Current build uses clearly labeled visual placeholders because standalone professional photos were not supplied in the uploaded materials. Replace placeholders with approved therapy-room, professional portrait, consultation, and education imagery.

## 7. Responsive behavior
Designed for 1440 / 1280 / 1024 / 768 / 390 / 375. Desktop grids intelligently collapse rather than simply shrinking. Mobile navigation becomes a full-width dropdown. Touch targets and text remain readable.

## 8. Accessibility
Visible focus states, semantic headings, labels, reduced-motion support, keyboard-friendly accordions/forms, contrast-aware palette, descriptive placeholder alt text.

## 9. Content safety
No fabricated awards, testimonials, statistics, institutional affiliations, clinical specialties, course fees, course outcomes, accreditation, or professional-credit claims. Unsupported information is marked [PLACEHOLDER].

## 10. GitHub Pages
This is a static HTML/CSS/JS site. Upload the folder to a GitHub repository and enable GitHub Pages from the repository's Settings → Pages area. A typical GitHub Pages user site uses `username.github.io`.
