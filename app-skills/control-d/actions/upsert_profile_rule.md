# Control D · `upsert_profile_rule`

Create or replace root-folder custom DNS rules on a Control D profile for one or more hostname patterns.

- **Service**: `control_d`
- **Action**: `upsert_profile_rule`
- **Action id**: `control_d.upsert_profile_rule`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "control_d" --action "upsert_profile_rule"
```

## Run

```bash
oo connector run "control_d" --action "upsert_profile_rule" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Control D state. Confirm the exact payload and intended effect with the user before running.
