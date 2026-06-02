# Fireflies · `update_meeting_title`

Update the title for a Fireflies meeting.

- **Service**: `fireflies`
- **Action**: `update_meeting_title`
- **Action id**: `fireflies.update_meeting_title`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fireflies" --action "update_meeting_title"
```

## Run

```bash
oo connector run "fireflies" --action "update_meeting_title" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Fireflies state. Confirm the exact payload and intended effect with the user before running.
