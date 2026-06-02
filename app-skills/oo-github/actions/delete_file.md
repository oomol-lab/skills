# GitHub · `delete_file`

Delete a repository file through the GitHub contents API. Deleting under .github/workflows may require GitHub workflow scope.

- **Service**: `github`
- **Action**: `delete_file`
- **Action id**: `github.delete_file`
- **Required scopes**: github.contents.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "delete_file"
```

## Run

```bash
oo connector run "github" --action "delete_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites GitHub data. Always confirm the target and get explicit user approval before running.
