# Gmail · `create_filter`

Create a Gmail filter with matching criteria and resulting actions. Use this to automatically organize incoming mail.

- **Service**: `gmail`
- **Action**: `create_filter`
- **Action id**: `gmail.create_filter`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "create_filter"
```

## Run

```bash
oo connector run "gmail" --action "create_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
