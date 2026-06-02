# Wit.ai · `get_app`

Retrieve details and training status for a specific Wit.ai app.

- **Service**: `wit_ai`
- **Action**: `get_app`
- **Action id**: `wit_ai.get_app`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "get_app"
```

## Run

```bash
oo connector run "wit_ai" --action "get_app" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
