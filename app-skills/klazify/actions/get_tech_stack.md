# Klazify · `get_tech_stack`

Return the detected technology stack for one website URL with Klazify.

- **Service**: `klazify`
- **Action**: `get_tech_stack`
- **Action id**: `klazify.get_tech_stack`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klazify" --action "get_tech_stack"
```

## Run

```bash
oo connector run "klazify" --action "get_tech_stack" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
