# Buildkite · `get_build`

Get a single Buildkite build by organization, pipeline slug, and build number.

- **Service**: `buildkite`
- **Action**: `get_build`
- **Action id**: `buildkite.get_build`
- **Required scopes**: read_builds

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "get_build"
```

## Run

```bash
oo connector run "buildkite" --action "get_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
