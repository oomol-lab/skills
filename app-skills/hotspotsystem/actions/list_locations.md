# HotspotSystem · `list_locations`

List HotspotSystem locations owned by the authenticated operator.

- **Service**: `hotspotsystem`
- **Action**: `list_locations`
- **Action id**: `hotspotsystem.list_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hotspotsystem" --action "list_locations"
```

## Run

```bash
oo connector run "hotspotsystem" --action "list_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
