# ReadMe · `delete_changelog`

Delete one ReadMe changelog entry by slug.

- **Service**: `readme`
- **Action**: `delete_changelog`
- **Action id**: `readme.delete_changelog`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "delete_changelog"
```

## Run

```bash
oo connector run "readme" --action "delete_changelog" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ReadMe data. Always confirm the target and get explicit user approval before running.
