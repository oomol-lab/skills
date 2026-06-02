# NeverBounce · `parse_job`

Parse a NeverBounce bulk job created without auto_parse enabled.

- **Service**: `neverbounce`
- **Action**: `parse_job`
- **Action id**: `neverbounce.parse_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neverbounce" --action "parse_job"
```

## Run

```bash
oo connector run "neverbounce" --action "parse_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
