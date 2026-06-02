# Streamtime · `list_rate_cards`

List the Streamtime rate cards available to the authenticated organisation.

- **Service**: `streamtime`
- **Action**: `list_rate_cards`
- **Action id**: `streamtime.list_rate_cards`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "streamtime" --action "list_rate_cards"
```

## Run

```bash
oo connector run "streamtime" --action "list_rate_cards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
