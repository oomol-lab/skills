# PandaDoc · `list_contacts`

List contacts in the connected PandaDoc workspace, with optional exact email filtering.

- **Service**: `pandadoc`
- **Action**: `list_contacts`
- **Action id**: `pandadoc.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "list_contacts"
```

## Run

```bash
oo connector run "pandadoc" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
