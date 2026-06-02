# Asana · `update_project`

Update an existing Asana project by gid.

- **Service**: `asana`
- **Action**: `update_project`
- **Action id**: `asana.update_project`
- **Required scopes**: projects:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "update_project"
```

## Run

```bash
oo connector run "asana" --action "update_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Asana state. Confirm the exact payload and intended effect with the user before running.
