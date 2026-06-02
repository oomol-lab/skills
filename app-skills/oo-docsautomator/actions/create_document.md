# DocsAutomator · `create_document`

Generate one DocsAutomator document synchronously and return the resulting file URLs plus signing metadata when available.

- **Service**: `docsautomator`
- **Action**: `create_document`
- **Action id**: `docsautomator.create_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsautomator" --action "create_document"
```

## Run

```bash
oo connector run "docsautomator" --action "create_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DocsAutomator state. Confirm the exact payload and intended effect with the user before running.
