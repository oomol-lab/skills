# ReadMe · `delete_doc`

Delete one ReadMe doc page by slug.

- **Service**: `readme`
- **Action**: `delete_doc`
- **Action id**: `readme.delete_doc`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "delete_doc"
```

## Run

```bash
oo connector run "readme" --action "delete_doc" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ReadMe data. Always confirm the target and get explicit user approval before running.
