# Basin · `update_project`

Update an existing Basin project by ID.

- **Service**: `basin`
- **Action**: `update_project`
- **Action id**: `basin.update_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "basin" --action "update_project"
```

## Run

```bash
oo connector run "basin" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Basin state. Confirm the exact payload and intended effect with the user before running.
