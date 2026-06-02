# LaunchDarkly · `add_member_to_teams`

Add one or more LaunchDarkly members to one or more teams with a semantic patch update.

- **Service**: `launch_darkly`
- **Action**: `add_member_to_teams`
- **Action id**: `launch_darkly.add_member_to_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "add_member_to_teams"
```

## Run

```bash
oo connector run "launch_darkly" --action "add_member_to_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes LaunchDarkly state. Confirm the exact payload and intended effect with the user before running.
