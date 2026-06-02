# Crowdin · `list_branches`

List Crowdin project branches.

- **Service**: `crowdin`
- **Action**: `list_branches`
- **Action id**: `crowdin.list_branches`
- **Required scopes**: crowdin.source.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crowdin" --action "list_branches"
```

## Run

```bash
oo connector run "crowdin" --action "list_branches" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
