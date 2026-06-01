# SunoAPI · `get_remaining_credits`

Fetch the remaining SunoAPI credits for the authenticated account.

- **Service**: `sunoapi`
- **Action**: `get_remaining_credits`
- **Action id**: `sunoapi.get_remaining_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "get_remaining_credits"
```

## Run

```bash
oo connector run "sunoapi" --action "get_remaining_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
