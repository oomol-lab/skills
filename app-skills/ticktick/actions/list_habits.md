# TickTick · `list_habits`

List habits available to the connected TickTick account.

- **Service**: `ticktick`
- **Action**: `list_habits`
- **Action id**: `ticktick.list_habits`
- **Required scopes**: ticktick.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ticktick" --action "list_habits"
```

## Run

```bash
oo connector run "ticktick" --action "list_habits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
