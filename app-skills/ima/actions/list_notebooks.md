# ima · `list_notebooks`

List IMA note folders for the connected account.

- **Service**: `ima`
- **Action**: `list_notebooks`
- **Action id**: `ima.list_notebooks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ima" --action "list_notebooks"
```

## Run

```bash
oo connector run "ima" --action "list_notebooks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
