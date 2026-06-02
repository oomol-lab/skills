# Doppler · `update_secret_note`

Update the note for a specific secret.

- **Service**: `doppler`
- **Action**: `update_secret_note`
- **Action id**: `doppler.update_secret_note`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "update_secret_note"
```

## Run

```bash
oo connector run "doppler" --action "update_secret_note" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Doppler state. Confirm the exact payload and intended effect with the user before running.
