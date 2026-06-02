# Lemon Squeezy · `retrieve_webhook`

Retrieve a single Lemon Squeezy webhook by ID.

- **Service**: `lemon_squeezy`
- **Action**: `retrieve_webhook`
- **Action id**: `lemon_squeezy.retrieve_webhook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lemon_squeezy" --action "retrieve_webhook"
```

## Run

```bash
oo connector run "lemon_squeezy" --action "retrieve_webhook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
