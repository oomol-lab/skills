# Buildkite · `list_organizations`

List Buildkite organizations accessible to the current API token.

- **Service**: `buildkite`
- **Action**: `list_organizations`
- **Action id**: `buildkite.list_organizations`
- **Required scopes**: read_organizations

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "buildkite" --action "list_organizations"
```

## Run

```bash
oo connector run "buildkite" --action "list_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
