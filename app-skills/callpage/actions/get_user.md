# CallPage · `get_user`

Get one CallPage user by identifier or email address.

- **Service**: `callpage`
- **Action**: `get_user`
- **Action id**: `callpage.get_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callpage" --action "get_user"
```

## Run

```bash
oo connector run "callpage" --action "get_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
