# PandaDoc · `list_templates`

List templates available in the connected PandaDoc workspace.

- **Service**: `pandadoc`
- **Action**: `list_templates`
- **Action id**: `pandadoc.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "list_templates"
```

## Run

```bash
oo connector run "pandadoc" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
