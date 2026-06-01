# Streamtime · `get_organisation`

Get the authenticated Streamtime organisation details.

- **Service**: `streamtime`
- **Action**: `get_organisation`
- **Action id**: `streamtime.get_organisation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "get_organisation"
```

## Run

```bash
oo connector run "streamtime" --action "get_organisation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
