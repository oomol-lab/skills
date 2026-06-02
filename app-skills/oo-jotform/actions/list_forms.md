# Jotform · `list_forms`

List forms available to the authenticated Jotform account.

- **Service**: `jotform`
- **Action**: `list_forms`
- **Action id**: `jotform.list_forms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jotform" --action "list_forms"
```

## Run

```bash
oo connector run "jotform" --action "list_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
