# PandaDoc · `create_folder`

Create a new document folder in PandaDoc.

- **Service**: `pandadoc`
- **Action**: `create_folder`
- **Action id**: `pandadoc.create_folder`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "create_folder"
```

## Run

```bash
oo connector run "pandadoc" --action "create_folder" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PandaDoc state. Confirm the exact payload and intended effect with the user before running.
