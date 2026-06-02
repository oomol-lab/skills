# Doppler · `create_project`

Create a Doppler project in the current workplace.

- **Service**: `doppler`
- **Action**: `create_project`
- **Action id**: `doppler.create_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "create_project"
```

## Run

```bash
oo connector run "doppler" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
