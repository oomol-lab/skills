# Control D · `list_profiles`

List the Control D profiles available to the authenticated API token.

- **Service**: `control_d`
- **Action**: `list_profiles`
- **Action id**: `control_d.list_profiles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "control_d" --action "list_profiles"
```

## Run

```bash
oo connector run "control_d" --action "list_profiles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
