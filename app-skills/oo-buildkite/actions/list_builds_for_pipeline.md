# Buildkite · `list_builds_for_pipeline`

List builds for a single Buildkite pipeline.

- **Service**: `buildkite`
- **Action**: `list_builds_for_pipeline`
- **Action id**: `buildkite.list_builds_for_pipeline`
- **Required scopes**: read_builds

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "list_builds_for_pipeline"
```

## Run

```bash
oo connector run "buildkite" --action "list_builds_for_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
