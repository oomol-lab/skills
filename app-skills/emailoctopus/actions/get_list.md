# EmailOctopus · `get_list`

Fetch a single EmailOctopus mailing list by ID.

- **Service**: `emailoctopus`
- **Action**: `get_list`
- **Action id**: `emailoctopus.get_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailoctopus" --action "get_list"
```

## Run

```bash
oo connector run "emailoctopus" --action "get_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
