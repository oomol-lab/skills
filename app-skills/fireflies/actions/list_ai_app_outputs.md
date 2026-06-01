# Fireflies · `list_ai_app_outputs`

List Fireflies AI app outputs for transcripts or app IDs.

- **Service**: `fireflies`
- **Action**: `list_ai_app_outputs`
- **Action id**: `fireflies.list_ai_app_outputs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "list_ai_app_outputs"
```

## Run

```bash
oo connector run "fireflies" --action "list_ai_app_outputs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
