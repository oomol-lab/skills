# ReadMe · `create_category`

Create a ReadMe guide or reference category.

- **Service**: `readme`
- **Action**: `create_category`
- **Action id**: `readme.create_category`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "create_category"
```

## Run

```bash
oo connector run "readme" --action "create_category" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ReadMe state. Confirm the exact payload and intended effect with the user before running.
