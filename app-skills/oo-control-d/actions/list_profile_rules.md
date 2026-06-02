# Control D · `list_profile_rules`

List the root-folder custom DNS rules configured on a Control D profile.

- **Service**: `control_d`
- **Action**: `list_profile_rules`
- **Action id**: `control_d.list_profile_rules`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "control_d" --action "list_profile_rules"
```

## Run

```bash
oo connector run "control_d" --action "list_profile_rules" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
