# Gmail · `update_draft`

Update an existing Gmail draft in place. Omitted fields fall back to the current draft content, so you can replace only the parts you want to change.

- **Service**: `gmail`
- **Action**: `update_draft`
- **Action id**: `gmail.update_draft`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "update_draft"
```

## Run

```bash
oo connector run "gmail" --action "update_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
