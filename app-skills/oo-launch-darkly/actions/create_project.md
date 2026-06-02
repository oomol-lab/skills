# LaunchDarkly · `create_project`

Create a LaunchDarkly project using either common fields or a full official request body.

- **Service**: `launch_darkly`
- **Action**: `create_project`
- **Action id**: `launch_darkly.create_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "create_project"
```

## Run

```bash
oo connector run "launch_darkly" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes LaunchDarkly state. Confirm the exact payload and intended effect with the user before running.
