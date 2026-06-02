# HotspotSystem · `list_location_subscribers`

List HotspotSystem subscribers for one specific location.

- **Service**: `hotspotsystem`
- **Action**: `list_location_subscribers`
- **Action id**: `hotspotsystem.list_location_subscribers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hotspotsystem" --action "list_location_subscribers"
```

## Run

```bash
oo connector run "hotspotsystem" --action "list_location_subscribers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
