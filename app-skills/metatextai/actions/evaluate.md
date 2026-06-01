# MetatextAI · `evaluate`

Evaluate one chat transcript against the connected MetatextAI application's configured guardrails.

- **Service**: `metatextai`
- **Action**: `evaluate`
- **Action id**: `metatextai.evaluate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "metatextai" --action "evaluate"
```

## Run

```bash
oo connector run "metatextai" --action "evaluate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
