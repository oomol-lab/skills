# Buildkite · `create_build`

Create a new Buildkite build for a pipeline.

- **Service**: `buildkite`
- **Action**: `create_build`
- **Action id**: `buildkite.create_build`
- **Required scopes**: write_builds

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "create_build"
```

## Run

```bash
oo connector run "buildkite" --action "create_build" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Buildkite state. Confirm the exact payload and intended effect with the user before running.
