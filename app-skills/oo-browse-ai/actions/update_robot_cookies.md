# Browse AI · `update_robot_cookies`

Update the cookies stored on one Browse AI robot.

- **Service**: `browse_ai`
- **Action**: `update_robot_cookies`
- **Action id**: `browse_ai.update_robot_cookies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browse_ai" --action "update_robot_cookies"
```

## Run

```bash
oo connector run "browse_ai" --action "update_robot_cookies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Browse AI state. Confirm the exact payload and intended effect with the user before running.
