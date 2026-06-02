# ReadMe · `update_category`

Update one ReadMe category by slug.

- **Service**: `readme`
- **Action**: `update_category`
- **Action id**: `readme.update_category`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "update_category"
```

## Run

```bash
oo connector run "readme" --action "update_category" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ReadMe state. Confirm the exact payload and intended effect with the user before running.
