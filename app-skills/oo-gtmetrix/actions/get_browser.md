# GTmetrix · `get_browser`

Get a single GTmetrix browser by ID.

- **Service**: `gtmetrix`
- **Action**: `get_browser`
- **Action id**: `gtmetrix.get_browser`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "get_browser"
```

## Run

```bash
oo connector run "gtmetrix" --action "get_browser" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
