# SunoAPI · `generate_persona`

Submit a SunoAPI persona generation task and return the generated persona details.

- **Service**: `sunoapi`
- **Action**: `generate_persona`
- **Action id**: `sunoapi.generate_persona`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "generate_persona"
```

## Run

```bash
oo connector run "sunoapi" --action "generate_persona" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
