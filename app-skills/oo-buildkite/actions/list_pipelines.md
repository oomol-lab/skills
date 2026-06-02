# Buildkite · `list_pipelines`

List Buildkite pipelines for an organization.

- **Service**: `buildkite`
- **Action**: `list_pipelines`
- **Action id**: `buildkite.list_pipelines`
- **Required scopes**: read_pipelines

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "list_pipelines"
```

## Run

```bash
oo connector run "buildkite" --action "list_pipelines" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
