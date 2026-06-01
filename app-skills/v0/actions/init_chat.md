# v0 · `init_chat`

Initialize a new v0 chat from files, a repository, a registry, a zip archive, or a template.

- **Service**: `v0`
- **Action**: `init_chat`
- **Action id**: `v0.init_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "init_chat"
```

## Run

```bash
oo connector run "v0" --action "init_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
