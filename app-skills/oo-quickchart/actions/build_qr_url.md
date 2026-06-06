# QuickChart · `build_qr_url`

Build a QuickChart QR code image URL for text, URLs, or other compact QR payloads.

- **Service**: `quickchart`
- **Action**: `build_qr_url`
- **Action id**: `quickchart.build_qr_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quickchart" --action "build_qr_url"
```

## Run

```bash
oo connector run "quickchart" --action "build_qr_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
