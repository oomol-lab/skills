# EmailOctopus · `list_list_contacts`

List contacts in a specific EmailOctopus mailing list.

- **Service**: `emailoctopus`
- **Action**: `list_list_contacts`
- **Action id**: `emailoctopus.list_list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailoctopus" --action "list_list_contacts"
```

## Run

```bash
oo connector run "emailoctopus" --action "list_list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
