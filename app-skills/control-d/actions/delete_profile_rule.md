# Control D · `delete_profile_rule`

Delete one root-folder custom DNS rule from a Control D profile.

- **Service**: `control_d`
- **Action**: `delete_profile_rule`
- **Action id**: `control_d.delete_profile_rule`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "control_d" --action "delete_profile_rule"
```

## Run

```bash
oo connector run "control_d" --action "delete_profile_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Control D data. Always confirm the target and get explicit user approval before running.
