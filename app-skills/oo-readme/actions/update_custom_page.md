# ReadMe · `update_custom_page`

Update one ReadMe custom page by slug.

- **Service**: `readme`
- **Action**: `update_custom_page`
- **Action id**: `readme.update_custom_page`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "update_custom_page"
```

## Run

```bash
oo connector run "readme" --action "update_custom_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ReadMe state. Confirm the exact payload and intended effect with the user before running.
