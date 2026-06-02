# Templated · `get_account`

Get the current Templated account associated with the API key.

- **Service**: `templated`
- **Action**: `get_account`
- **Action id**: `templated.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "templated" --action "get_account"
```

## Run

```bash
oo connector run "templated" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
