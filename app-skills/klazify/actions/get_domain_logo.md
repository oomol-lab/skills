# Klazify · `get_domain_logo`

Return the hosted logo URL for one website URL with Klazify.

- **Service**: `klazify`
- **Action**: `get_domain_logo`
- **Action id**: `klazify.get_domain_logo`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klazify" --action "get_domain_logo"
```

## Run

```bash
oo connector run "klazify" --action "get_domain_logo" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
