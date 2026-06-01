# BoxHero · `list_locations`

List BoxHero locations available to the linked team.

- **Service**: `boxhero`
- **Action**: `list_locations`
- **Action id**: `boxhero.list_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "boxhero" --action "list_locations"
```

## Run

```bash
oo connector run "boxhero" --action "list_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
