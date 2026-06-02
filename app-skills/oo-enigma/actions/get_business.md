# Enigma · `get_business`

Retrieve a single Enigma entity by GraphQL entity ID and entity type, returning a normalized summary plus the raw enriched entity payload.

- **Service**: `enigma`
- **Action**: `get_business`
- **Action id**: `enigma.get_business`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "enigma" --action "get_business"
```

## Run

```bash
oo connector run "enigma" --action "get_business" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
