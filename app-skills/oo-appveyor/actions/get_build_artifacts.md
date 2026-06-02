# AppVeyor · `get_build_artifacts`

List artifacts produced by one AppVeyor build job.

- **Service**: `appveyor`
- **Action**: `get_build_artifacts`
- **Action id**: `appveyor.get_build_artifacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "appveyor" --action "get_build_artifacts"
```

## Run

```bash
oo connector run "appveyor" --action "get_build_artifacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
