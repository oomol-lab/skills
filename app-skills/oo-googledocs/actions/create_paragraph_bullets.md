# Google Docs · `create_paragraph_bullets`

Add bullets to paragraphs within a specified range in a Google Docs document.

- **Service**: `googledocs`
- **Action**: `create_paragraph_bullets`
- **Action id**: `googledocs.create_paragraph_bullets`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "create_paragraph_bullets"
```

## Run

```bash
oo connector run "googledocs" --action "create_paragraph_bullets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
