# Doppler · `update_change_request_assignees`

Replace the reviewers assigned to a Doppler change request.

- **Service**: `doppler`
- **Action**: `update_change_request_assignees`
- **Action id**: `doppler.update_change_request_assignees`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "update_change_request_assignees"
```

## Run

```bash
oo connector run "doppler" --action "update_change_request_assignees" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
