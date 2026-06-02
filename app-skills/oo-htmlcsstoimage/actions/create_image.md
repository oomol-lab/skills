# HTML/CSS to Image · `create_image`

Create an image from either raw HTML/CSS or a public webpage URL with HTML/CSS to Image.

- **Service**: `htmlcsstoimage`
- **Action**: `create_image`
- **Action id**: `htmlcsstoimage.create_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "htmlcsstoimage" --action "create_image"
```

## Run

```bash
oo connector run "htmlcsstoimage" --action "create_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes HTML/CSS to Image state. Confirm the exact payload and intended effect with the user before running.
