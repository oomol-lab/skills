# GitHub · `get_file_contents`

Read a repository file and return both base64 and decoded text when available.

- **Service**: `github`
- **Action**: `get_file_contents`
- **Action id**: `github.get_file_contents`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_file_contents"
```

## Run

```bash
oo connector run "github" --action "get_file_contents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
