# Gmail · `modify_thread_labels`

Add and/or remove labels on every message in a Gmail thread. Use this when the label change should apply to the whole conversation.

- **Service**: `gmail`
- **Action**: `modify_thread_labels`
- **Action id**: `gmail.modify_thread_labels`
- **Required scopes**: gmail.modify

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "modify_thread_labels"
```

## Run

```bash
oo connector run "gmail" --action "modify_thread_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
