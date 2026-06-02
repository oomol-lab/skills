# Perplexity · `create_embeddings`

Generate vector embeddings for one or more input strings with Perplexity.

- **Service**: `perplexity`
- **Action**: `create_embeddings`
- **Action id**: `perplexity.create_embeddings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "perplexity" --action "create_embeddings"
```

## Run

```bash
oo connector run "perplexity" --action "create_embeddings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Perplexity state. Confirm the exact payload and intended effect with the user before running.
