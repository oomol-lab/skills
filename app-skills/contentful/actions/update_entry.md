# Contentful · `update_entry`

Update a Contentful entry using optimistic locking.

- **Service**: `contentful`
- **Action**: `update_entry`
- **Action id**: `contentful.update_entry`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "contentful" --action "update_entry"
```

## Run

```bash
oo connector run "contentful" --action "update_entry" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Contentful state. Confirm the exact payload and intended effect with the user before running.
