# HTML/CSS to Image · `delete_batch_images`

Delete multiple generated images from HTML/CSS to Image in one request.

- **Service**: `htmlcsstoimage`
- **Action**: `delete_batch_images`
- **Action id**: `htmlcsstoimage.delete_batch_images`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "htmlcsstoimage" --action "delete_batch_images"
```

## Run

```bash
oo connector run "htmlcsstoimage" --action "delete_batch_images" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites HTML/CSS to Image data. Always confirm the target and get explicit user approval before running.
