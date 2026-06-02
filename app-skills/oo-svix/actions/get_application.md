# Svix · `get_application`

Fetch one Svix application by ID or UID.

- **Service**: `svix`
- **Action**: `get_application`
- **Action id**: `svix.get_application`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "get_application"
```

## Run

```bash
oo connector run "svix" --action "get_application" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
