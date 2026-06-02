# Linkhut · `get_all_tags`

List all Linkhut tags with their bookmark counts.

- **Service**: `linkhut`
- **Action**: `get_all_tags`
- **Action id**: `linkhut.get_all_tags`
- **Required scopes**: linkhut.tags.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkhut" --action "get_all_tags"
```

## Run

```bash
oo connector run "linkhut" --action "get_all_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
