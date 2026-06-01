# ReadMe · `get_project`

Get metadata for the ReadMe project associated with the API key.

- **Service**: `readme`
- **Action**: `get_project`
- **Action id**: `readme.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "get_project"
```

## Run

```bash
oo connector run "readme" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
