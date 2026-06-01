# Slite · `list_notes`

List Slite notes with optional owner, parent, ordering, and pagination filters.

- **Service**: `slite`
- **Action**: `list_notes`
- **Action id**: `slite.list_notes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slite" --action "list_notes"
```

## Run

```bash
oo connector run "slite" --action "list_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
