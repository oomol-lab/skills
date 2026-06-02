# SmugMug · `get_node_parent`

Retrieve the direct parent node of a SmugMug node.

- **Service**: `smugmug`
- **Action**: `get_node_parent`
- **Action id**: `smugmug.get_node_parent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_node_parent"
```

## Run

```bash
oo connector run "smugmug" --action "get_node_parent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
