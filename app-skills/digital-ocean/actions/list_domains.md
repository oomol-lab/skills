# DigitalOcean · `list_domains`

List DigitalOcean DNS domains with pagination.

- **Service**: `digital_ocean`
- **Action**: `list_domains`
- **Action id**: `digital_ocean.list_domains`
- **Required scopes**: domain:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "list_domains"
```

## Run

```bash
oo connector run "digital_ocean" --action "list_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
