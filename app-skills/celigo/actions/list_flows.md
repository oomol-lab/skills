# Celigo · `list_flows`

List flows available in the current Celigo account.

- **Service**: `celigo`
- **Action**: `list_flows`
- **Action id**: `celigo.list_flows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "celigo" --action "list_flows"
```

## Run

```bash
oo connector run "celigo" --action "list_flows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
