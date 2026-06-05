# Tomba · `get_account`

Retrieve information about the authenticated Tomba account.

- **Service**: `tomba`
- **Action**: `get_account`
- **Action id**: `tomba.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "get_account"
```

## Run

```bash
oo connector run "tomba" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
