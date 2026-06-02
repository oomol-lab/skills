# flomo · `create_memo`

Create a flomo memo by sending markdown or plain text to the incoming webhook.

- **Service**: `flomo`
- **Action**: `create_memo`
- **Action id**: `flomo.create_memo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "flomo" --action "create_memo"
```

## Run

```bash
oo connector run "flomo" --action "create_memo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes flomo state. Confirm the exact payload and intended effect with the user before running.
