# ReadMe · `create_changelog`

Create a ReadMe changelog entry.

- **Service**: `readme`
- **Action**: `create_changelog`
- **Action id**: `readme.create_changelog`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "create_changelog"
```

## Run

```bash
oo connector run "readme" --action "create_changelog" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ReadMe state. Confirm the exact payload and intended effect with the user before running.
