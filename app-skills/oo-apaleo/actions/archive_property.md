# apaleo · `archive_property`

Archive a live property by ID.

- **Service**: `apaleo`
- **Action**: `archive_property`
- **Action id**: `apaleo.archive_property`
- **Required scopes**: apaleo.properties.manage

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apaleo" --action "archive_property"
```

## Run

```bash
oo connector run "apaleo" --action "archive_property" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
