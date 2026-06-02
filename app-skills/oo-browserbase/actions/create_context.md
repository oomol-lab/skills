# Browserbase · `create_context`

Create a Browserbase context and return the upload credentials for an encrypted user-data directory.

- **Service**: `browserbase`
- **Action**: `create_context`
- **Action id**: `browserbase.create_context`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "create_context"
```

## Run

```bash
oo connector run "browserbase" --action "create_context" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Browserbase state. Confirm the exact payload and intended effect with the user before running.
