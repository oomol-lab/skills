# HeyGen · `list_assets`

List uploaded HeyGen image, video, and audio assets so they can be reused in video generation.

- **Service**: `heygen`
- **Action**: `list_assets`
- **Action id**: `heygen.list_assets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "list_assets"
```

## Run

```bash
oo connector run "heygen" --action "list_assets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
