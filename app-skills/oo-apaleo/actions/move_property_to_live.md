# apaleo · `move_property_to_live`

Move a test property to live status.

- **Service**: `apaleo`
- **Action**: `move_property_to_live`
- **Action id**: `apaleo.move_property_to_live`
- **Required scopes**: apaleo.properties.manage

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "move_property_to_live"
```

## Run

```bash
oo connector run "apaleo" --action "move_property_to_live" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes apaleo state. Confirm the exact payload and intended effect with the user before running.
