# TickTick · `update_project`

Update a TickTick project by project ID.

- **Service**: `ticktick`
- **Action**: `update_project`
- **Action id**: `ticktick.update_project`
- **Required scopes**: ticktick.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "update_project"
```

## Run

```bash
oo connector run "ticktick" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TickTick state. Confirm the exact payload and intended effect with the user before running.
