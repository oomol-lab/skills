# ExpoFP · `list_expos`

List all expos accessible to the current ExpoFP API token.

- **Service**: `expofp`
- **Action**: `list_expos`
- **Action id**: `expofp.list_expos`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "expofp" --action "list_expos"
```

## Run

```bash
oo connector run "expofp" --action "list_expos" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
