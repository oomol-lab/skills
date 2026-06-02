# Linear · `create_attachment`

Create or update an attachment for the specified Linear issue.

- **Service**: `linear`
- **Action**: `create_attachment`
- **Action id**: `linear.create_attachment`
- **Required scopes**: linear.issues.create

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "create_attachment"
```

## Run

```bash
oo connector run "linear" --action "create_attachment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
