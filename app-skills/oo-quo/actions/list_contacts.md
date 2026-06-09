# Quo · `list_contacts`

List contacts in the connected Quo workspace with optional filters.

- **Service**: `quo`
- **Action**: `list_contacts`
- **Action id**: `quo.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quo" --action "list_contacts"
```

## Run

```bash
oo connector run "quo" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
