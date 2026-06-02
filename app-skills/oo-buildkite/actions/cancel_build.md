# Buildkite · `cancel_build`

Cancel a Buildkite build by build number.

- **Service**: `buildkite`
- **Action**: `cancel_build`
- **Action id**: `buildkite.cancel_build`
- **Required scopes**: write_builds

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "cancel_build"
```

## Run

```bash
oo connector run "buildkite" --action "cancel_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
