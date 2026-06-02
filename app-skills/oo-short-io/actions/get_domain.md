# Short.io · `get_domain`

Get Short.io domain details by domain ID.

- **Service**: `short_io`
- **Action**: `get_domain`
- **Action id**: `short_io.get_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_io" --action "get_domain"
```

## Run

```bash
oo connector run "short_io" --action "get_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
