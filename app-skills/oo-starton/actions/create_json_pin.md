# Starton · `create_json_pin`

Upload JSON content to Starton IPFS and create a new pin.

- **Service**: `starton`
- **Action**: `create_json_pin`
- **Action id**: `starton.create_json_pin`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "starton" --action "create_json_pin"
```

## Run

```bash
oo connector run "starton" --action "create_json_pin" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Starton state. Confirm the exact payload and intended effect with the user before running.
