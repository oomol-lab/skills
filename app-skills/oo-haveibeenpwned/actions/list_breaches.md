# Have I Been Pwned · `list_breaches`

List breaches in Have I Been Pwned and optionally filter by domain or spam-list flag.

- **Service**: `haveibeenpwned`
- **Action**: `list_breaches`
- **Action id**: `haveibeenpwned.list_breaches`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "haveibeenpwned" --action "list_breaches"
```

## Run

```bash
oo connector run "haveibeenpwned" --action "list_breaches" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
