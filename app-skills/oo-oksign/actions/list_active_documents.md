# OKSign · `list_active_documents`

List active OKSign documents visible in the current account.

- **Service**: `oksign`
- **Action**: `list_active_documents`
- **Action id**: `oksign.list_active_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "oksign" --action "list_active_documents"
```

## Run

```bash
oo connector run "oksign" --action "list_active_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
