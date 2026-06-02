# Browserbase · `create_session`

Create a Browserbase session using the connected project by default, with optional context reuse and persistence.

- **Service**: `browserbase`
- **Action**: `create_session`
- **Action id**: `browserbase.create_session`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "create_session"
```

## Run

```bash
oo connector run "browserbase" --action "create_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Browserbase state. Confirm the exact payload and intended effect with the user before running.
