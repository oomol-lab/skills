# Streamtime · `list_branches`

List the Streamtime branches available to the authenticated organisation.

- **Service**: `streamtime`
- **Action**: `list_branches`
- **Action id**: `streamtime.list_branches`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "list_branches"
```

## Run

```bash
oo connector run "streamtime" --action "list_branches" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
