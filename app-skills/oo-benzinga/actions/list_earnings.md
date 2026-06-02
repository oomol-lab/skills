# Benzinga · `list_earnings`

List Benzinga earnings calendar events with optional date and symbol filters.

- **Service**: `benzinga`
- **Action**: `list_earnings`
- **Action id**: `benzinga.list_earnings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "benzinga" --action "list_earnings"
```

## Run

```bash
oo connector run "benzinga" --action "list_earnings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
