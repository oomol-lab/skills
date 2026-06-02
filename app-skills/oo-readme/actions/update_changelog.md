# ReadMe · `update_changelog`

Update one ReadMe changelog entry by slug.

- **Service**: `readme`
- **Action**: `update_changelog`
- **Action id**: `readme.update_changelog`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "update_changelog"
```

## Run

```bash
oo connector run "readme" --action "update_changelog" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ReadMe state. Confirm the exact payload and intended effect with the user before running.
