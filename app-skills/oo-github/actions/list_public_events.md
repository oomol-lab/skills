# GitHub · `list_public_events`

List the global public GitHub event feed.

- **Service**: `github`
- **Action**: `list_public_events`
- **Action id**: `github.list_public_events`
- **Required scopes**: github.user.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_public_events"
```

## Run

```bash
oo connector run "github" --action "list_public_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
