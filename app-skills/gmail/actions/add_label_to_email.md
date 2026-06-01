# Gmail · `add_label_to_email`

Add and/or remove labels on a single Gmail message. Provide at least one label mutation and use label IDs from `list_labels`.

- **Service**: `gmail`
- **Action**: `add_label_to_email`
- **Action id**: `gmail.add_label_to_email`
- **Required scopes**: gmail.modify

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "add_label_to_email"
```

## Run

```bash
oo connector run "gmail" --action "add_label_to_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
