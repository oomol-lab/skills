# ReadMe · `create_custom_page`

Create a ReadMe custom page.

- **Service**: `readme`
- **Action**: `create_custom_page`
- **Action id**: `readme.create_custom_page`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "create_custom_page"
```

## Run

```bash
oo connector run "readme" --action "create_custom_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ReadMe state. Confirm the exact payload and intended effect with the user before running.
