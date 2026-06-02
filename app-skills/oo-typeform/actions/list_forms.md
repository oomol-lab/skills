# Typeform · `list_forms`

List forms available to the authenticated Typeform account.

- **Service**: `typeform`
- **Action**: `list_forms`
- **Action id**: `typeform.list_forms`
- **Required scopes**: forms:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typeform" --action "list_forms"
```

## Run

```bash
oo connector run "typeform" --action "list_forms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
