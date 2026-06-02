# JobNimbus · `create_contact`

Create one JobNimbus contact from a raw contact payload, with optional actor, bulk, and skip controls.

- **Service**: `jobnimbus`
- **Action**: `create_contact`
- **Action id**: `jobnimbus.create_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jobnimbus" --action "create_contact"
```

## Run

```bash
oo connector run "jobnimbus" --action "create_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes JobNimbus state. Confirm the exact payload and intended effect with the user before running.
