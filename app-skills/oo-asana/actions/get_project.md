# Asana · `get_project`

Get a single Asana project by gid.

- **Service**: `asana`
- **Action**: `get_project`
- **Action id**: `asana.get_project`
- **Required scopes**: projects:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "asana" --action "get_project"
```

## Run

```bash
oo connector run "asana" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
