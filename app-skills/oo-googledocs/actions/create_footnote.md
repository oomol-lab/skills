# Google Docs · `create_footnote`

Create a footnote in a Google Docs document at a specific location or at the end of a segment.

- **Service**: `googledocs`
- **Action**: `create_footnote`
- **Action id**: `googledocs.create_footnote`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "create_footnote"
```

## Run

```bash
oo connector run "googledocs" --action "create_footnote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
