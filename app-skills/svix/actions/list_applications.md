# Svix · `list_applications`

List Svix applications for the current account.

- **Service**: `svix`
- **Action**: `list_applications`
- **Action id**: `svix.list_applications`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "list_applications"
```

## Run

```bash
oo connector run "svix" --action "list_applications" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
