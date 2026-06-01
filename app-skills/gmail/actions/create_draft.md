# Gmail · `create_draft`

Create a Gmail draft with a simplified input and output shape. This compatibility action returns only the created `draftId`.

- **Service**: `gmail`
- **Action**: `create_draft`
- **Action id**: `gmail.create_draft`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "create_draft"
```

## Run

```bash
oo connector run "gmail" --action "create_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Gmail state. Confirm the exact payload and intended effect with the user before running.
