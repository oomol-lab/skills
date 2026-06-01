# HotspotSystem · `list_location_options`

List HotspotSystem locations as lightweight id-name options.

- **Service**: `hotspotsystem`
- **Action**: `list_location_options`
- **Action id**: `hotspotsystem.list_location_options`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hotspotsystem" --action "list_location_options"
```

## Run

```bash
oo connector run "hotspotsystem" --action "list_location_options" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
