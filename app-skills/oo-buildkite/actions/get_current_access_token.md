# Buildkite · `get_current_access_token`

Inspect the current Buildkite API access token, including scopes and owner summary.

- **Service**: `buildkite`
- **Action**: `get_current_access_token`
- **Action id**: `buildkite.get_current_access_token`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "get_current_access_token"
```

## Run

```bash
oo connector run "buildkite" --action "get_current_access_token" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
