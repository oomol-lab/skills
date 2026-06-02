# SunoAPI · `generate_mashup`

Submit a SunoAPI mashup task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `generate_mashup`
- **Action id**: `sunoapi.generate_mashup`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "generate_mashup"
```

## Run

```bash
oo connector run "sunoapi" --action "generate_mashup" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
