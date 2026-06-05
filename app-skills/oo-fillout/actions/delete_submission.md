# Fillout · `delete_submission`

Delete one Fillout form submission by submission ID.

- **Service**: `fillout`
- **Action**: `delete_submission`
- **Action id**: `fillout.delete_submission`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fillout" --action "delete_submission"
```

## Run

```bash
oo connector run "fillout" --action "delete_submission" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Fillout data. Always confirm the target and get explicit user approval before running.
