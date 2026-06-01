# Zeplin · `list_screen_versions`

List versions of a Zeplin screen. Unlike the upstream toolkit, this action requires both projectId and screenId to match the official endpoint.

- **Service**: `zeplin`
- **Action**: `list_screen_versions`
- **Action id**: `zeplin.list_screen_versions`
- **Required scopes**: zeplin.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zeplin" --action "list_screen_versions"
```

## Run

```bash
oo connector run "zeplin" --action "list_screen_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
