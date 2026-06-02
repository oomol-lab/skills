# Streamtime · `get_company`

Get a Streamtime company by ID.

- **Service**: `streamtime`
- **Action**: `get_company`
- **Action id**: `streamtime.get_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "get_company"
```

## Run

```bash
oo connector run "streamtime" --action "get_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
