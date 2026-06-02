# Calendly · `get_user`

Retrieve one Calendly user by user URI.

- **Service**: `calendly`
- **Action**: `get_user`
- **Action id**: `calendly.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_user"
```

## Run

```bash
oo connector run "calendly" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
