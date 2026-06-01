# OpenAI · `create_batch`

Create an OpenAI batch job from an uploaded input file.

- **Service**: `openai`
- **Action**: `create_batch`
- **Action id**: `openai.create_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "create_batch"
```

## Run

```bash
oo connector run "openai" --action "create_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenAI state. Confirm the exact payload and intended effect with the user before running.
