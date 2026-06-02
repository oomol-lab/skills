# GitHub · `create_or_update_file`

Create or update a repository file through the GitHub contents API. Writing under .github/workflows may require GitHub workflow scope.

- **Service**: `github`
- **Action**: `create_or_update_file`
- **Action id**: `github.create_or_update_file`
- **Required scopes**: github.contents.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "create_or_update_file"
```

## Run

```bash
oo connector run "github" --action "create_or_update_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitHub state. Confirm the exact payload and intended effect with the user before running.
