# Have I Been Pwned · `get_latest_breach`

Get the most recently added breach in Have I Been Pwned.

- **Service**: `haveibeenpwned`
- **Action**: `get_latest_breach`
- **Action id**: `haveibeenpwned.get_latest_breach`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "haveibeenpwned" --action "get_latest_breach"
```

## Run

```bash
oo connector run "haveibeenpwned" --action "get_latest_breach" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
