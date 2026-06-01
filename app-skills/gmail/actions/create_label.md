# Gmail · `create_label`

Create a new Gmail label and return its internal label ID. Use the returned ID in downstream label modification actions.

- **Service**: `gmail`
- **Action**: `create_label`
- **Action id**: `gmail.create_label`
- **Required scopes**: gmail.labels

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "create_label"
```

## Run

```bash
oo connector run "gmail" --action "create_label" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
