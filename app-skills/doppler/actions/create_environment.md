# Doppler · `create_environment`

Create an environment under a Doppler project.

- **Service**: `doppler`
- **Action**: `create_environment`
- **Action id**: `doppler.create_environment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "create_environment"
```

## Run

```bash
oo connector run "doppler" --action "create_environment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
