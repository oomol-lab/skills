# Gmail · `batch_modify_messages`

Add and/or remove labels on up to 1,000 Gmail messages in one request. Use this for bulk archive, mark-as-read, or custom label workflows.

- **Service**: `gmail`
- **Action**: `batch_modify_messages`
- **Action id**: `gmail.batch_modify_messages`
- **Required scopes**: gmail.modify

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "batch_modify_messages"
```

## Run

```bash
oo connector run "gmail" --action "batch_modify_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
