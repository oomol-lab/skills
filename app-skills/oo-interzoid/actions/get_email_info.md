# Interzoid · `get_email_info`

Validate and enrich an email address with Interzoid.

- **Service**: `interzoid`
- **Action**: `get_email_info`
- **Action id**: `interzoid.get_email_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "interzoid" --action "get_email_info"
```

## Run

```bash
oo connector run "interzoid" --action "get_email_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
