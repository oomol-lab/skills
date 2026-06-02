# Have I Been Pwned · `get_breach`

Get one breach by its stable HIBP Name value.

- **Service**: `haveibeenpwned`
- **Action**: `get_breach`
- **Action id**: `haveibeenpwned.get_breach`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "haveibeenpwned" --action "get_breach"
```

## Run

```bash
oo connector run "haveibeenpwned" --action "get_breach" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
