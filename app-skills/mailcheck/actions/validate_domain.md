# Mailcheck · `validate_domain`

Validate a domain and return UserCheck domain-level risk and MX signals.

- **Service**: `mailcheck`
- **Action**: `validate_domain`
- **Action id**: `mailcheck.validate_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailcheck" --action "validate_domain"
```

## Run

```bash
oo connector run "mailcheck" --action "validate_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
