# Typefully · `get_social_set`

Retrieve details for a Typefully social set.

- **Service**: `typefully`
- **Action**: `get_social_set`
- **Action id**: `typefully.get_social_set`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typefully" --action "get_social_set"
```

## Run

```bash
oo connector run "typefully" --action "get_social_set" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Typefully state. Confirm the exact payload and intended effect with the user before running.
