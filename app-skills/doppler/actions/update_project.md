# Doppler · `update_project`

Update a Doppler project's name or description.

- **Service**: `doppler`
- **Action**: `update_project`
- **Action id**: `doppler.update_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "update_project"
```

## Run

```bash
oo connector run "doppler" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
