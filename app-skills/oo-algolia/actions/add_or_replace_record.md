# Algolia · `add_or_replace_record`

Add a new record or replace an existing Algolia record using its objectID.

- **Service**: `algolia`
- **Action**: `add_or_replace_record`
- **Action id**: `algolia.add_or_replace_record`
- **Required scopes**: addObject

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "algolia" --action "add_or_replace_record"
```

## Run

```bash
oo connector run "algolia" --action "add_or_replace_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Algolia state. Confirm the exact payload and intended effect with the user before running.
