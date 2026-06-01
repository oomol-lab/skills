# Mistral AI · `create_embeddings`

Call the Mistral embeddings interface to generate vectors.

- **Service**: `mistral_ai`
- **Action**: `create_embeddings`
- **Action id**: `mistral_ai.create_embeddings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "create_embeddings"
```

## Run

```bash
oo connector run "mistral_ai" --action "create_embeddings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.
