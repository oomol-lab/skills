# Superchat · `search_contacts`

Search Superchat contacts by phone, email, or one selected custom attribute field.

- **Service**: `superchat`
- **Action**: `search_contacts`
- **Action id**: `superchat.search_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "superchat" --action "search_contacts"
```

## Run

```bash
oo connector run "superchat" --action "search_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
