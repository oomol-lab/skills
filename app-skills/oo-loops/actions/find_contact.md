# Loops · `find_contact`

Find Loops contacts by email or userId.

- **Service**: `loops`
- **Action**: `find_contact`
- **Action id**: `loops.find_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loops" --action "find_contact"
```

## Run

```bash
oo connector run "loops" --action "find_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
