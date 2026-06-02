# NeverBounce · `single_check`

Verify a single email address with NeverBounce and return the verification result.

- **Service**: `neverbounce`
- **Action**: `single_check`
- **Action id**: `neverbounce.single_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neverbounce" --action "single_check"
```

## Run

```bash
oo connector run "neverbounce" --action "single_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
