# Close · `create_opportunity`

Create a Close opportunity for an existing lead.

- **Service**: `close`
- **Action**: `create_opportunity`
- **Action id**: `close.create_opportunity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "create_opportunity"
```

## Run

```bash
oo connector run "close" --action "create_opportunity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Close state. Confirm the exact payload and intended effect with the user before running.
