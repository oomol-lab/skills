# Crowdin · `list_directories`

List Crowdin directories.

- **Service**: `crowdin`
- **Action**: `list_directories`
- **Action id**: `crowdin.list_directories`
- **Required scopes**: crowdin.source.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crowdin" --action "list_directories"
```

## Run

```bash
oo connector run "crowdin" --action "list_directories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
