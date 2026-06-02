# BoxHero · `get_team_info`

Get the linked BoxHero team information and team mode.

- **Service**: `boxhero`
- **Action**: `get_team_info`
- **Action id**: `boxhero.get_team_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "boxhero" --action "get_team_info"
```

## Run

```bash
oo connector run "boxhero" --action "get_team_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
