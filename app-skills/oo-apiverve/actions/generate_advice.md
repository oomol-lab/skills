# APIVerve · `generate_advice`

Generate a random piece of advice using APIVerve Advice Generator.

- **Service**: `apiverve`
- **Action**: `generate_advice`
- **Action id**: `apiverve.generate_advice`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "generate_advice"
```

## Run

```bash
oo connector run "apiverve" --action "generate_advice" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
