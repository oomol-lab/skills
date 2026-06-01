# PandaDoc · `delete_template`

Delete a template from the connected PandaDoc workspace.

- **Service**: `pandadoc`
- **Action**: `delete_template`
- **Action id**: `pandadoc.delete_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "delete_template"
```

## Run

```bash
oo connector run "pandadoc" --action "delete_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites PandaDoc data. Always confirm the target and get explicit user approval before running.
