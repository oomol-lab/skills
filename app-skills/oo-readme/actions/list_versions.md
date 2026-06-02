# ReadMe · `list_versions`

List the versions configured for the ReadMe project.

- **Service**: `readme`
- **Action**: `list_versions`
- **Action id**: `readme.list_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "list_versions"
```

## Run

```bash
oo connector run "readme" --action "list_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
