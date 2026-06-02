# HeyGen · `list_templates`

List HeyGen templates created under the authenticated account.

- **Service**: `heygen`
- **Action**: `list_templates`
- **Action id**: `heygen.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heygen" --action "list_templates"
```

## Run

```bash
oo connector run "heygen" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
