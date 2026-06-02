# GitHub · `list_directory_contents`

List entries under a repository directory path. Empty path means repository root.

- **Service**: `github`
- **Action**: `list_directory_contents`
- **Action id**: `github.list_directory_contents`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_directory_contents"
```

## Run

```bash
oo connector run "github" --action "list_directory_contents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
