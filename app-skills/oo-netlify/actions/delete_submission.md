# Netlify · `delete_submission`

Delete one Netlify form submission by submission ID.

- **Service**: `netlify`
- **Action**: `delete_submission`
- **Action id**: `netlify.delete_submission`
- **Required scopes**: netlify.form.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "delete_submission"
```

## Run

```bash
oo connector run "netlify" --action "delete_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Netlify data. Always confirm the target and get explicit user approval before running.
