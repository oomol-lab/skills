# TickTick · `get_habit`

Get a TickTick habit by its habit ID.

- **Service**: `ticktick`
- **Action**: `get_habit`
- **Action id**: `ticktick.get_habit`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "get_habit"
```

## Run

```bash
oo connector run "ticktick" --action "get_habit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
