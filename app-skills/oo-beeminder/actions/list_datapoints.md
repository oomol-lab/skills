# Beeminder · `list_datapoints`

List datapoints for one Beeminder goal with optional count or page parameters.

- **Service**: `beeminder`
- **Action**: `list_datapoints`
- **Action id**: `beeminder.list_datapoints`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beeminder" --action "list_datapoints"
```

## Run

```bash
oo connector run "beeminder" --action "list_datapoints" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
