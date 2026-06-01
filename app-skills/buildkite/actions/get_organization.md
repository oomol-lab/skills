# Buildkite · `get_organization`

Get a single Buildkite organization by slug.

- **Service**: `buildkite`
- **Action**: `get_organization`
- **Action id**: `buildkite.get_organization`
- **Required scopes**: read_organizations

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "get_organization"
```

## Run

```bash
oo connector run "buildkite" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
