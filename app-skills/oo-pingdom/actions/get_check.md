# Pingdom · `get_check`

Retrieve a detailed Pingdom uptime check by ID.

- **Service**: `pingdom`
- **Action**: `get_check`
- **Action id**: `pingdom.get_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pingdom" --action "get_check"
```

## Run

```bash
oo connector run "pingdom" --action "get_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
