# 2Chat · `list_contacts`

List contacts from the connected 2Chat account, with optional pagination and channel filtering.

- **Service**: `twochat`
- **Action**: `list_contacts`
- **Action id**: `twochat.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twochat" --action "list_contacts"
```

## Run

```bash
oo connector run "twochat" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
