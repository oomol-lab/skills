# Algolia · `update_record_partially`

Partially update an existing Algolia record by objectID.

- **Service**: `algolia`
- **Action**: `update_record_partially`
- **Action id**: `algolia.update_record_partially`
- **Required scopes**: addObject

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "update_record_partially"
```

## Run

```bash
oo connector run "algolia" --action "update_record_partially" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Algolia state. Confirm the exact payload and intended effect with the user before running.
