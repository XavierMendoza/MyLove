# Halloween storybook artwork

Original local SVG illustrations for `halloween.html`. No photographs, raster
embeds, external artwork, libraries, or reference-image metadata are included.
The approved homepage SVGs were copied into `witch.svg`, `black-cat.svg`,
`ghost.svg`, and `bat.svg`; their homepage originals have not been edited.

## Personal artwork

`special-pumpkin.svg` was manually reconstructed while inspecting all five
candle photographs (IMG_4359 through IMG_4363). The editable filled paths are:

- `handwritten-l`: the upper loop, lower loop, and sweeping curved base.
- `handwritten-plus`: the uneven cross, with a longer upper vertical portion.
- `handwritten-x`: the curved upper-left hook, tapering diagonal, and curled
  lower-right stroke.
- `heart-left`, `heart-top`, `heart-bottom`, `heart-small`: individual irregular
  black hearts.

These are hand-observed vector contours, not a font or an automatic pixel trace.
The source drawings wrap around a curved glass candle and are partly distorted
by perspective. Their relative placement was adapted to one flat pumpkin face;
exact stroke matching should be confirmed in visual review. The entire pumpkin
sways as a unit; the handwritten paths never animate independently.

`her-cat.svg` was drawn after inspecting all seven supplied cat photographs,
including front, side, and full-body views. It retains the gray cap and eye
markings, asymmetric central white blaze, green eyes, pink nose, white muzzle,
whiskers, chest and paws, and gray back and tail. The proportions are deliberately
stylized. Groups `eyes`, `ears`, and `tail` and the `.breathing` body group can be
refined separately. A small tilted purple hat leaves the facial blaze visible.

## Animation and accessibility

Page-level motion lives in `css/halloween.css`. `her-cat.svg` and `bat.svg`
contain CSS animations for individual body parts. Both include their own
`prefers-reduced-motion` rules because SVG images are separate documents.
Important artwork has descriptive HTML alt text; scene accents have empty alt
text and are hidden from assistive technology. All images ignore pointer events.

The love-letter text is in one `.hw-letter-text` block in `halloween.html`, after
`REPLACE THIS PLACEHOLDER WITH THE FINAL LOVE LETTER`. Replace that block's text
without changing the envelope or JavaScript. Paragraph spacing is preserved;
the paper grows in the normal page flow to accommodate a long message.

## Storybook refinement

The `story-*.svg` variants add softer shading, expression highlights, fabric
folds, ribbon details, pumpkin ribs, wing membranes, and individually moving
scarecrow hands/spider legs. Original assets used inside the approved letter
component remain unchanged. Its JavaScript and existing CSS rules are unchanged.
The numbered section label above the letter was removed with all other section
numbers, as requested; the heading, supporting sentence, envelope inscription,
button labels, and placeholder letter remain intact.

Scenery is composed in separate editable SVGs:

- `village.svg`: curved-roof cottages, windows, shingles, chimneys, garlands,
  trees, fences, a winding path, and pumpkin clusters.
- `pumpkin-patch.svg`: pumpkin rows, vines, a rustic heart sign, and garden beds.
- `graveyard-scene.svg`: garden fences, small heart-carved stones, flowers,
  mushrooms, distant cottages, and rolling ground.
- `cat-garden.svg`: a vine-covered arched gate, stepping stones, a woven basket,
  a hanging lantern, and planted borders.
- `letter-garden.svg`: a separate floral landscape below the approved letter.
- `closing-garden.svg`: a distant village horizon with leafy foreground banks.
- `night-sky.svg` and `stone-engraving.svg`: constellations and botanical stone
  decoration. `garden-scene.svg` and `garden-corner.svg` are reusable scenery
  studies retained with the artwork.

The seven named handwritten paths in `special-pumpkin.svg` were preserved exactly
during refinement. Only the pumpkin's shading, ribs, stem, vines, highlights and
surrounding scenery changed. `her-cat.svg` now has a more tapered face, finer fur
contours, detailed green irises, a smaller decorated hat and a tufted white chest.
It remains a stylized interpretation of the locally inspected references, not
an exact portrait or photographic reproduction.

## File inventory

- `bat.svg`
- `black-cat.svg`
- `cat-garden.svg`
- `closing-garden.svg`
- `cloud.svg`
- `flower.svg`
- `garden-corner.svg`
- `garden-scene.svg`
- `ghost-heart.svg`
- `ghost-waving.svg`
- `ghost.svg`
- `giggling-pumpkin.svg`
- `graveyard-scene.svg`
- `heart.svg`
- `her-cat.svg`
- `lantern.svg`
- `leaf.svg`
- `letter-garden.svg`
- `moon.svg`
- `night-sky.svg`
- `pumpkin-patch.svg`
- `scarecrow.svg`
- `skeleton-dance.svg`
- `skeleton-wave.svg`
- `sleepy-pumpkin.svg`
- `smiling-pumpkin.svg`
- `special-pumpkin.svg`
- `spider.svg`
- `star.svg`
- `stone-engraving.svg`
- `story-bat.svg`
- `story-black-cat.svg`
- `story-cloud.svg`
- `story-ghost-heart.svg`
- `story-ghost-waving.svg`
- `story-ghost.svg`
- `story-giggling-pumpkin.svg`
- `story-lantern.svg`
- `story-moon.svg`
- `story-scarecrow.svg`
- `story-skeleton-dance.svg`
- `story-skeleton-wave.svg`
- `story-sleepy-pumpkin.svg`
- `story-smiling-pumpkin.svg`
- `story-spider.svg`
- `story-witch-pumpkin.svg`
- `story-witch.svg`
- `village.svg`
- `web.svg`
- `witch-pumpkin.svg`
- `witch.svg`
