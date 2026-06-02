# EmailOctopus · `list_lists`

List EmailOctopus mailing lists available to the current API key.

- **Service**: `emailoctopus`
- **Action**: `list_lists`
- **Action id**: `emailoctopus.list_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailoctopus" --action "list_lists"
```

## Run

```bash
oo connector run "emailoctopus" --action "list_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
