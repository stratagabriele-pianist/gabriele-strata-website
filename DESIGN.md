# Design System Documentation

## 1. Overview & Creative North Star: "The Resonant Minimalist"

This design system is a bespoke editorial framework crafted for the modern classical virtuoso. It moves away from the rigid, grid-locked structures of standard web design, leaning instead into a philosophy of **Lyrical Fluidity**. Just as a piano performance balances the technical precision of the keys with the fluid resonance of the pedal, this system utilizes high-contrast typography and organic, curved geometries to create a digital experience that feels both authoritative and ethereal.

**The Creative North Star:** This system is a "Digital Stage." It treats the screen as a gallery space where white space is not empty—it is "rest" in a musical score, providing the necessary silence for the content to resonate. We achieve a premium feel through intentional asymmetry, overlapping layers that mimic physical depth, and a complete rejection of traditional borders in favor of tonal transitions.

---

### 2. Colors

The palette is derived from the cool, contemplative teals and blues of the provided imagery, grounded by sophisticated neutrals and punctuated by "Gold Resonance"—a muted gold accent that signifies importance and artistry.

*   **Primary (#006671):** Used for primary brand moments and key navigational elements.
*   **Secondary (#446179):** A muted steel blue for secondary depth and supporting UI elements.
*   **Tertiary (#735c00):** The "Gold Resonance" accent. Use this sparingly for high-value CTAs, active states, or delicate decorative flourishes.
*   **Surface Hierarchy:**
    *   `surface` (#fff8f6): The main canvas.
    *   `surface_container_low` (#fff1eb): Used for subtle content grouping.
    *   `surface_container_highest` (#f5ded3): Used for high-contrast content blocks.

**The "No-Line" Rule:**
1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts. For instance, a section utilizing `surface_container_low` should sit directly against a `surface` background to define its edges.

**The "Glass & Gradient" Rule:**
To inject "soul" into the UI, use semi-transparent glassmorphism for floating navigation bars or overlay cards. Utilize `surface` colors with a 70-80% opacity and a `20px` backdrop-blur. For main CTAs, apply a subtle linear gradient transitioning from `primary` (#006671) to `primary_container` (#00818f) to provide a polished, three-dimensional depth.

---

### 3. Typography

The typography strategy relies on the interplay between **Epilogue** (Display/Headline) and **Manrope** (Body/Label). 

*   **Display & Headline (Epilogue):** These are the "Soloists." Use `display-lg` (3.5rem) and `headline-lg` (2rem) with generous tracking and intentional asymmetry. Headlines should often be "broken" across lines or overlapped with imagery to create an editorial, magazine-like feel.
*   **Body & Title (Manrope):** The "Accompaniment." Manrope provides modern, clean readability. Use `body-lg` (1rem) for long-form narrative text, ensuring a line-height of at least 1.6 to maintain a feeling of "breathability."
*   **Label (Manrope):** Use `label-md` in all-caps with increased letter-spacing (0.05em) for category tags or small metadata.

---

### 4. Elevation & Depth

We reject traditional box-shadows. Depth is achieved through **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** Stack surfaces to create hierarchy. Place a `surface_container_lowest` card on a `surface_container_low` section. The subtle shift in hex value creates a soft, natural lift that mimics fine paper.
*   **Ambient Shadows:** If a floating element (like a modal or dropdown) requires a shadow, it must be "Ambient." Use a blur value of `40px` to `60px` with an opacity of 4%-6%. The shadow color must be a tinted version of `on_surface` (#251913), never a generic grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` (#bdc9cb) at 15% opacity. It should be felt, not seen.
*   **Fluid Separators:** Instead of horizontal lines, use SVG-based fluid, curved paths using `primary_fixed_dim` (#70d5e5) at low opacity to separate large thematic sections. These curves should mimic the silhouette of a grand piano or the movement of a conductor’s baton.

---

### 5. Components

All components must adhere to the **Roundedness Scale**, specifically `xl` (1.5rem) or `full` (9999px) to maintain the "Lyrical Fluidity" theme.

*   **Buttons:**
    *   *Primary:* Pill-shaped (`full`), using the `primary` to `primary_container` gradient. Typography should be `title-sm` in `on_primary`.
    *   *Tertiary:* No background. Use `tertiary` (#735c00) text with a subtle underline that appears on hover.
*   **Cards:** Forbid divider lines. Use `spacing-10` (3.5rem) of vertical white space to separate the header, body, and footer of a card. Use `surface_container` tokens to distinguish the card from the background.
*   **Input Fields:** Ghost-style inputs. No bottom line or box. Use a `surface_container_highest` background with `xl` corner radius. Helper text should use `label-sm`.
*   **Repertoire List:** Use `spacing-6` between list items. Instead of a divider, use a subtle `primary_fixed` (#97f0ff) vertical accent line (2px wide) that only appears on the "active" or "hovered" item.
*   **Performance Chips:** Use `secondary_container` (#c5e3ff) with `on_secondary_container` (#48667e) text. Shape should always be `full` (pill).

---

### 6. Do's and Don'ts

**Do:**
*   **DO** use extreme white space. If a section feels crowded, double the spacing (e.g., move from `spacing-12` to `spacing-24`).
*   **DO** overlap elements. Allow a `display-lg` headline to slightly overlap a portrait image to create depth.
*   **DO** use the "Gold Resonance" (`tertiary`) for interactive highlights, such as play buttons or "Book Now" links.
*   **DO** ensure all interactive elements have a minimum touch target of 44px, even if the visual element is smaller.

**Don't:**
*   **DON'T** use 90-degree corners. Even "sharp" elements should have a minimum of `sm` (0.25rem) roundedness.
*   **DON'T** use black (#000000). Use `on_background` (#251913) for text to maintain a softer, premium tonal range.
*   **DON'T** use standard Material Design "Drop Shadows." They are too heavy for a classical aesthetic.
*   **DON'T** use more than three levels of hierarchy in a single view. Keep the "melody" of the page clear and focused.