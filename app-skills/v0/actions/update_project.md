# v0 · `update_project`

Update a v0 project's metadata, instructions, visibility, or linked Vercel project.

- **Service**: `v0`
- **Action**: `update_project`
- **Action id**: `v0.update_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "update_project"
```

## Run

```bash
oo connector run "v0" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes v0 state. Confirm the exact payload and intended effect with the user before running.
