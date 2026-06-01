# ZenRows · `get_usage`

Retrieve usage and plan details for the connected ZenRows API key.

- **Service**: `zenrows`
- **Action**: `get_usage`
- **Action id**: `zenrows.get_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zenrows" --action "get_usage"
```

## Run

```bash
oo connector run "zenrows" --action "get_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
