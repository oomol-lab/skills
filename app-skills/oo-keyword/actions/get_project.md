# Keyword.com · `get_project`

Get one Keyword.com project or group by name.

- **Service**: `keyword`
- **Action**: `get_project`
- **Action id**: `keyword.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keyword" --action "get_project"
```

## Run

```bash
oo connector run "keyword" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
