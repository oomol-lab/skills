# Klazify · `get_domain_expiration`

Return the registration and expiration details for one website URL with Klazify.

- **Service**: `klazify`
- **Action**: `get_domain_expiration`
- **Action id**: `klazify.get_domain_expiration`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klazify" --action "get_domain_expiration"
```

## Run

```bash
oo connector run "klazify" --action "get_domain_expiration" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
