# Wit.ai · `list_apps`

List the Wit.ai apps accessible by the current bearer token.

- **Service**: `wit_ai`
- **Action**: `list_apps`
- **Action id**: `wit_ai.list_apps`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "list_apps"
```

## Run

```bash
oo connector run "wit_ai" --action "list_apps" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
