# Calendly · `get_current_user`

Retrieve the authenticated Calendly user for the connected personal access token.

- **Service**: `calendly`
- **Action**: `get_current_user`
- **Action id**: `calendly.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_current_user"
```

## Run

```bash
oo connector run "calendly" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
