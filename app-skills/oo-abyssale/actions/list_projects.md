# Abyssale · `list_projects`

List Abyssale projects available to the API key.

- **Service**: `abyssale`
- **Action**: `list_projects`
- **Action id**: `abyssale.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "abyssale" --action "list_projects"
```

## Run

```bash
oo connector run "abyssale" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
