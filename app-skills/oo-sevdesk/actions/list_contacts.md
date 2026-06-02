# sevdesk · `list_contacts`

List sevdesk contacts with optional customer number, pagination, and embed options.

- **Service**: `sevdesk`
- **Action**: `list_contacts`
- **Action id**: `sevdesk.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sevdesk" --action "list_contacts"
```

## Run

```bash
oo connector run "sevdesk" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
