# Pushover · `list_groups`

List the delivery groups owned by the connected Pushover application account.

- **Service**: `pushover`
- **Action**: `list_groups`
- **Action id**: `pushover.list_groups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "list_groups"
```

## Run

```bash
oo connector run "pushover" --action "list_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
