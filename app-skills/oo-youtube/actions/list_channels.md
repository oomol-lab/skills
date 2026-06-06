# YouTube · `list_channels`

List YouTube channel resources by ID, username, handle, or authenticated owner.

- **Service**: `youtube`
- **Action**: `list_channels`
- **Action id**: `youtube.list_channels`
- **Required scopes**: youtube.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "youtube" --action "list_channels"
```

## Run

```bash
oo connector run "youtube" --action "list_channels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
