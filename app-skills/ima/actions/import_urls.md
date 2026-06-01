# ima · `import_urls`

Import webpages or WeChat article URLs into one IMA knowledge base.

- **Service**: `ima`
- **Action**: `import_urls`
- **Action id**: `ima.import_urls`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "import_urls"
```

## Run

```bash
oo connector run "ima" --action "import_urls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ima state. Confirm the exact payload and intended effect with the user before running.
