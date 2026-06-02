# Mailgun · `list_events`

List delivery, engagement, and failure events for a Mailgun domain.

- **Service**: `mailgun`
- **Action**: `list_events`
- **Action id**: `mailgun.list_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailgun" --action "list_events"
```

## Run

```bash
oo connector run "mailgun" --action "list_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
