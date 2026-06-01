# Globalping · `list_probes`

List the Globalping probes that are currently online with their location metadata.

- **Service**: `globalping`
- **Action**: `list_probes`
- **Action id**: `globalping.list_probes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "globalping" --action "list_probes"
```

## Run

```bash
oo connector run "globalping" --action "list_probes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
