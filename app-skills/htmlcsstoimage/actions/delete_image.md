# HTML/CSS to Image · `delete_image`

Delete one generated image from HTML/CSS to Image and clear its CDN cache.

- **Service**: `htmlcsstoimage`
- **Action**: `delete_image`
- **Action id**: `htmlcsstoimage.delete_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "htmlcsstoimage" --action "delete_image"
```

## Run

```bash
oo connector run "htmlcsstoimage" --action "delete_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites HTML/CSS to Image data. Always confirm the target and get explicit user approval before running.
