# Pushover · `get_group`

Get the name and membership of a Pushover delivery group.

- **Service**: `pushover`
- **Action**: `get_group`
- **Action id**: `pushover.get_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "get_group"
```

## Run

```bash
oo connector run "pushover" --action "get_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
