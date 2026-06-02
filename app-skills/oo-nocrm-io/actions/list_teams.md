# noCRM.io · `list_teams`

List the teams available in the connected noCRM.io account.

- **Service**: `nocrm_io`
- **Action**: `list_teams`
- **Action id**: `nocrm_io.list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocrm_io" --action "list_teams"
```

## Run

```bash
oo connector run "nocrm_io" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
