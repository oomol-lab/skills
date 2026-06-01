# Basin · `get_form_webhook`

Fetch a single Basin form webhook by ID.

- **Service**: `basin`
- **Action**: `get_form_webhook`
- **Action id**: `basin.get_form_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "get_form_webhook"
```

## Run

```bash
oo connector run "basin" --action "get_form_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
