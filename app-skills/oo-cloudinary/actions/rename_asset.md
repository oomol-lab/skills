# Cloudinary · `rename_asset`

Rename one uploaded Cloudinary asset by changing its public ID and return the normalized asset record.

- **Service**: `cloudinary`
- **Action**: `rename_asset`
- **Action id**: `cloudinary.rename_asset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudinary" --action "rename_asset"
```

## Run

```bash
oo connector run "cloudinary" --action "rename_asset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudinary state. Confirm the exact payload and intended effect with the user before running.
