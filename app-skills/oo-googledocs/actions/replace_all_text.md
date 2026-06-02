# Google Docs · `replace_all_text`

Replace all matching text in a Google Docs document. Supports case-sensitive and regex-based matching.

- **Service**: `googledocs`
- **Action**: `replace_all_text`
- **Action id**: `googledocs.replace_all_text`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "replace_all_text"
```

## Run

```bash
oo connector run "googledocs" --action "replace_all_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
