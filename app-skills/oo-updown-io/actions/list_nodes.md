# updown.io · `list_nodes`

List all updown.io monitoring nodes and their network metadata.

- **Service**: `updown_io`
- **Action**: `list_nodes`
- **Action id**: `updown_io.list_nodes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "updown_io" --action "list_nodes"
```

## Run

```bash
oo connector run "updown_io" --action "list_nodes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
