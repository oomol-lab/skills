# Codacy · `list_repository_analyses`

List repository analysis summaries for a Codacy organization on a Git provider.

- **Service**: `codacy`
- **Action**: `list_repository_analyses`
- **Action id**: `codacy.list_repository_analyses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codacy" --action "list_repository_analyses"
```

## Run

```bash
oo connector run "codacy" --action "list_repository_analyses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
