# Slite · `get_group`

Read one Slite group by identifier.

- **Service**: `slite`
- **Action**: `get_group`
- **Action id**: `slite.get_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slite" --action "get_group"
```

## Run

```bash
oo connector run "slite" --action "get_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
