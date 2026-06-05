# Typefully · `list_social_sets`

List Typefully social sets available to the current API key.

- **Service**: `typefully`
- **Action**: `list_social_sets`
- **Action id**: `typefully.list_social_sets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typefully" --action "list_social_sets"
```

## Run

```bash
oo connector run "typefully" --action "list_social_sets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
