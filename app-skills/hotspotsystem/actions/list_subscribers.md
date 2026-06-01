# HotspotSystem · `list_subscribers`

List HotspotSystem subscribers across all accessible locations.

- **Service**: `hotspotsystem`
- **Action**: `list_subscribers`
- **Action id**: `hotspotsystem.list_subscribers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hotspotsystem" --action "list_subscribers"
```

## Run

```bash
oo connector run "hotspotsystem" --action "list_subscribers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
