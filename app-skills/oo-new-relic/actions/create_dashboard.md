# New Relic · `create_dashboard`

Create a New Relic dashboard with pages and widgets using NerdGraph.

- **Service**: `new_relic`
- **Action**: `create_dashboard`
- **Action id**: `new_relic.create_dashboard`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "create_dashboard"
```

## Run

```bash
oo connector run "new_relic" --action "create_dashboard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes New Relic state. Confirm the exact payload and intended effect with the user before running.
