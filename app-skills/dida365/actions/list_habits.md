# Dida365 · `list_habits`

List habits available to the connected Dida365 account.

- **Service**: `dida365`
- **Action**: `list_habits`
- **Action id**: `dida365.list_habits`
- **Required scopes**: dida365.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dida365" --action "list_habits"
```

## Run

```bash
oo connector run "dida365" --action "list_habits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
