# LaunchDarkly · `patch_team`

Patch a LaunchDarkly team with semantic patch instructions.

- **Service**: `launch_darkly`
- **Action**: `patch_team`
- **Action id**: `launch_darkly.patch_team`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "patch_team"
```

## Run

```bash
oo connector run "launch_darkly" --action "patch_team" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes LaunchDarkly state. Confirm the exact payload and intended effect with the user before running.
