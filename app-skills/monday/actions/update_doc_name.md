# Monday · `update_doc_name`

Update the name of an existing Monday doc.

- **Service**: `monday`
- **Action**: `update_doc_name`
- **Action id**: `monday.update_doc_name`
- **Required scopes**: docs:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "update_doc_name"
```

## Run

```bash
oo connector run "monday" --action "update_doc_name" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
