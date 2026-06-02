# Google Docs · `replace_image`

Replace an existing image in a Google Docs document with a new image from a URI.

- **Service**: `googledocs`
- **Action**: `replace_image`
- **Action id**: `googledocs.replace_image`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "replace_image"
```

## Run

```bash
oo connector run "googledocs" --action "replace_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
