# Buildkite · `list_builds_for_organization`

List builds across all pipelines in a Buildkite organization.

- **Service**: `buildkite`
- **Action**: `list_builds_for_organization`
- **Action id**: `buildkite.list_builds_for_organization`
- **Required scopes**: read_builds

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "list_builds_for_organization"
```

## Run

```bash
oo connector run "buildkite" --action "list_builds_for_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
