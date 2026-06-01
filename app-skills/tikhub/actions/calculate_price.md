# TikHub · `calculate_price`

Calculate TikHub daily request pricing for one endpoint. Requires the /api/v1/tikhub/user/ TikHub path scope.

- **Service**: `tikhub`
- **Action**: `calculate_price`
- **Action id**: `tikhub.calculate_price`
- **Required scopes**: /api/v1/tikhub/user/

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tikhub" --action "calculate_price"
```

## Run

```bash
oo connector run "tikhub" --action "calculate_price" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
