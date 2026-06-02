# Control D · `get_profile`

Fetch one Control D profile by primary key.

- **Service**: `control_d`
- **Action**: `get_profile`
- **Action id**: `control_d.get_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "control_d" --action "get_profile"
```

## Run

```bash
oo connector run "control_d" --action "get_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
