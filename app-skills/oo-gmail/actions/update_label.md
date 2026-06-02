# Gmail · `update_label`

Update an existing Gmail label's properties, including name, visibility settings, or color.

- **Service**: `gmail`
- **Action**: `update_label`
- **Action id**: `gmail.update_label`
- **Required scopes**: gmail.labels

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "update_label"
```

## Run

```bash
oo connector run "gmail" --action "update_label" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
