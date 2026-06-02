# Refiner · `list_segments`

List segments in the connected Refiner workspace.

- **Service**: `refiner`
- **Action**: `list_segments`
- **Action id**: `refiner.list_segments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "refiner" --action "list_segments"
```

## Run

```bash
oo connector run "refiner" --action "list_segments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
