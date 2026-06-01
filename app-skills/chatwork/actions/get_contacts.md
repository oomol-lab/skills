# Chatwork · `get_contacts`

List Chatwork contacts visible to the authenticated account.

- **Service**: `chatwork`
- **Action**: `get_contacts`
- **Action id**: `chatwork.get_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "get_contacts"
```

## Run

```bash
oo connector run "chatwork" --action "get_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
