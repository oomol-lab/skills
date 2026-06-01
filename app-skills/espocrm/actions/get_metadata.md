# EspoCRM · `get_metadata`

Get EspoCRM application metadata, optionally narrowed to one metadata path.

- **Service**: `espocrm`
- **Action**: `get_metadata`
- **Action id**: `espocrm.get_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "espocrm" --action "get_metadata"
```

## Run

```bash
oo connector run "espocrm" --action "get_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
