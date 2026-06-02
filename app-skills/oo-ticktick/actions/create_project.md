# TickTick · `create_project`

Create a TickTick project with optional color, sort order, view mode, and kind.

- **Service**: `ticktick`
- **Action**: `create_project`
- **Action id**: `ticktick.create_project`
- **Required scopes**: ticktick.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "create_project"
```

## Run

```bash
oo connector run "ticktick" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes TickTick state. Confirm the exact payload and intended effect with the user before running.
