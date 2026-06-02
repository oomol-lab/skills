# Eventee · `list_participants`

List all participants currently registered in the current Eventee event.

- **Service**: `eventee`
- **Action**: `list_participants`
- **Action id**: `eventee.list_participants`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventee" --action "list_participants"
```

## Run

```bash
oo connector run "eventee" --action "list_participants" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
