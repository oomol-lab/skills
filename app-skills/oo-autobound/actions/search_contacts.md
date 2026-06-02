# Autobound · `search_contacts`

Search contacts that match Autobound contact-level signal filters.

- **Service**: `autobound`
- **Action**: `search_contacts`
- **Action id**: `autobound.search_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "autobound" --action "search_contacts"
```

## Run

```bash
oo connector run "autobound" --action "search_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
