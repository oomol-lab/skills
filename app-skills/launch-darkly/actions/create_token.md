# LaunchDarkly · `create_token`

Create a LaunchDarkly access token using either common fields or a full official request body.

- **Service**: `launch_darkly`
- **Action**: `create_token`
- **Action id**: `launch_darkly.create_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "launch_darkly" --action "create_token"
```

## Run

```bash
oo connector run "launch_darkly" --action "create_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes LaunchDarkly state. Confirm the exact payload and intended effect with the user before running.
