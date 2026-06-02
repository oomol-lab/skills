# Mailgun · `get_suppression`

Get one Mailgun suppression or allowlist record.

- **Service**: `mailgun`
- **Action**: `get_suppression`
- **Action id**: `mailgun.get_suppression`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "get_suppression"
```

## Run

```bash
oo connector run "mailgun" --action "get_suppression" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
