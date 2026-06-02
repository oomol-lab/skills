# LaunchDarkly · `patch_segment`

Patch a LaunchDarkly segment with JSON Patch, JSON Merge Patch, or semantic patch instructions.

- **Service**: `launch_darkly`
- **Action**: `patch_segment`
- **Action id**: `launch_darkly.patch_segment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "patch_segment"
```

## Run

```bash
oo connector run "launch_darkly" --action "patch_segment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes LaunchDarkly state. Confirm the exact payload and intended effect with the user before running.
