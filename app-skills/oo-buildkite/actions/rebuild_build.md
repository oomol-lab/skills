# Buildkite · `rebuild_build`

Rebuild a Buildkite build by build number.

- **Service**: `buildkite`
- **Action**: `rebuild_build`
- **Action id**: `buildkite.rebuild_build`
- **Required scopes**: write_builds

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "rebuild_build"
```

## Run

```bash
oo connector run "buildkite" --action "rebuild_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
