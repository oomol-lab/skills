# GoDial · `list_contacts_in_list`

List all contacts currently stored in one GoDial list.

- **Service**: `godial`
- **Action**: `list_contacts_in_list`
- **Action id**: `godial.list_contacts_in_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "godial" --action "list_contacts_in_list"
```

## Run

```bash
oo connector run "godial" --action "list_contacts_in_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
