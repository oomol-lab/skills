# Zeplin · `get_project`

Get a Zeplin project by project ID.

- **Service**: `zeplin`
- **Action**: `get_project`
- **Action id**: `zeplin.get_project`
- **Required scopes**: zeplin.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zeplin" --action "get_project"
```

## Run

```bash
oo connector run "zeplin" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
