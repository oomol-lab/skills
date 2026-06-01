# SmugMug · `get_node_parents`

Retrieve the breadcrumb trail of parent nodes for a SmugMug node.

- **Service**: `smugmug`
- **Action**: `get_node_parents`
- **Action id**: `smugmug.get_node_parents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "smugmug" --action "get_node_parents"
```

## Run

```bash
oo connector run "smugmug" --action "get_node_parents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
