# lexoffice · `update_article`

Update one Lexoffice article by ID using the latest optimistic-locking version.

- **Service**: `lexoffice`
- **Action**: `update_article`
- **Action id**: `lexoffice.update_article`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "update_article"
```

## Run

```bash
oo connector run "lexoffice" --action "update_article" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes lexoffice state. Confirm the exact payload and intended effect with the user before running.
