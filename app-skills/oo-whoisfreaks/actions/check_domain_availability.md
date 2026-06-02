# WhoisFreaks · `check_domain_availability`

Check whether one domain is available for registration and optionally request suggestions.

- **Service**: `whoisfreaks`
- **Action**: `check_domain_availability`
- **Action id**: `whoisfreaks.check_domain_availability`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "whoisfreaks" --action "check_domain_availability"
```

## Run

```bash
oo connector run "whoisfreaks" --action "check_domain_availability" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
