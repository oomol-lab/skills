# SmugMug · `list_child_nodes`

List the immediate child nodes under a SmugMug node.

- **Service**: `smugmug`
- **Action**: `list_child_nodes`
- **Action id**: `smugmug.list_child_nodes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "list_child_nodes"
```

## Run

```bash
oo connector run "smugmug" --action "list_child_nodes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
