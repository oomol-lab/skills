# lexoffice · `create_article`

Create one Lexoffice article with a NET or GROSS leading price payload.

- **Service**: `lexoffice`
- **Action**: `create_article`
- **Action id**: `lexoffice.create_article`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "create_article"
```

## Run

```bash
oo connector run "lexoffice" --action "create_article" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes lexoffice state. Confirm the exact payload and intended effect with the user before running.
