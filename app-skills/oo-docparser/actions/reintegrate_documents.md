# Docparser · `reintegrate_documents`

Schedule one or more Docparser documents for the integration queue using their document IDs.

- **Service**: `docparser`
- **Action**: `reintegrate_documents`
- **Action id**: `docparser.reintegrate_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "reintegrate_documents"
```

## Run

```bash
oo connector run "docparser" --action "reintegrate_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
