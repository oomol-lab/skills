# CallPage · `get_call`

Get one CallPage call by identifier.

- **Service**: `callpage`
- **Action**: `get_call`
- **Action id**: `callpage.get_call`
- **Required scopes**: calls.view

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callpage" --action "get_call"
```

## Run

```bash
oo connector run "callpage" --action "get_call" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
