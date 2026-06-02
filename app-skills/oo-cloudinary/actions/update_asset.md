# Cloudinary · `update_asset`

Update selected mutable fields of one uploaded Cloudinary asset by public ID using the explicit API.

- **Service**: `cloudinary`
- **Action**: `update_asset`
- **Action id**: `cloudinary.update_asset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudinary" --action "update_asset"
```

## Run

```bash
oo connector run "cloudinary" --action "update_asset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudinary state. Confirm the exact payload and intended effect with the user before running.
