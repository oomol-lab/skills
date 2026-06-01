# GoDial · `list_lists`

List GoDial lists in the current company.

- **Service**: `godial`
- **Action**: `list_lists`
- **Action id**: `godial.list_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "godial" --action "list_lists"
```

## Run

```bash
oo connector run "godial" --action "list_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
