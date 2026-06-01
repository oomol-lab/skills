# Eventee · `list_reviews`

List all session reviews submitted by attendees for the current Eventee event.

- **Service**: `eventee`
- **Action**: `list_reviews`
- **Action id**: `eventee.list_reviews`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eventee" --action "list_reviews"
```

## Run

```bash
oo connector run "eventee" --action "list_reviews" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
