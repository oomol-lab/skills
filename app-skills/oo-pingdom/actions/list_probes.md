# Pingdom · `list_probes`

List Pingdom probe servers and their location details.

- **Service**: `pingdom`
- **Action**: `list_probes`
- **Action id**: `pingdom.list_probes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pingdom" --action "list_probes"
```

## Run

```bash
oo connector run "pingdom" --action "list_probes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
