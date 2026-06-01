# Buildkite · `get_pipeline`

Get a single Buildkite pipeline by organization and pipeline slug.

- **Service**: `buildkite`
- **Action**: `get_pipeline`
- **Action id**: `buildkite.get_pipeline`
- **Required scopes**: read_pipelines

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "get_pipeline"
```

## Run

```bash
oo connector run "buildkite" --action "get_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
