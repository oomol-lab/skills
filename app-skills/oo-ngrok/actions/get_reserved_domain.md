# ngrok · `get_reserved_domain`

Fetch one ngrok reserved domain by ID and return the upstream domain object.

- **Service**: `ngrok`
- **Action**: `get_reserved_domain`
- **Action id**: `ngrok.get_reserved_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ngrok" --action "get_reserved_domain"
```

## Run

```bash
oo connector run "ngrok" --action "get_reserved_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
