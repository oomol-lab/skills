# Google Docs · `create_document2`

Create a blank Google Docs document. This legacy compatibility action is the no-initial-text variant of `create_document`.

- **Service**: `googledocs`
- **Action**: `create_document2`
- **Action id**: `googledocs.create_document2`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "create_document2"
```

## Run

```bash
oo connector run "googledocs" --action "create_document2" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
