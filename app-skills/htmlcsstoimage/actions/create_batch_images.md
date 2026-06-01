# HTML/CSS to Image · `create_batch_images`

Create up to 25 HTML/CSS to Image images in one batch using shared default options and per-image variations.

- **Service**: `htmlcsstoimage`
- **Action**: `create_batch_images`
- **Action id**: `htmlcsstoimage.create_batch_images`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "htmlcsstoimage" --action "create_batch_images"
```

## Run

```bash
oo connector run "htmlcsstoimage" --action "create_batch_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes HTML/CSS to Image state. Confirm the exact payload and intended effect with the user before running.
