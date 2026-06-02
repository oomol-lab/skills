# Wit.ai · `get_trait`

Retrieve a Wit.ai trait together with its configured values.

- **Service**: `wit_ai`
- **Action**: `get_trait`
- **Action id**: `wit_ai.get_trait`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wit_ai" --action "get_trait"
```

## Run

```bash
oo connector run "wit_ai" --action "get_trait" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
