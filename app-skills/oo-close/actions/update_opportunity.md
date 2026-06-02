# Close · `update_opportunity`

Update writable fields on an existing Close opportunity.

- **Service**: `close`
- **Action**: `update_opportunity`
- **Action id**: `close.update_opportunity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "close" --action "update_opportunity"
```

## Run

```bash
oo connector run "close" --action "update_opportunity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Close state. Confirm the exact payload and intended effect with the user before running.
