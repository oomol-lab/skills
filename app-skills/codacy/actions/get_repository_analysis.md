# Codacy · `get_repository_analysis`

Retrieve one Codacy repository analysis summary.

- **Service**: `codacy`
- **Action**: `get_repository_analysis`
- **Action id**: `codacy.get_repository_analysis`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "codacy" --action "get_repository_analysis"
```

## Run

```bash
oo connector run "codacy" --action "get_repository_analysis" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
