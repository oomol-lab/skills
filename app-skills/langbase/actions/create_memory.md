# Langbase · `create_memory`

Create a Langbase memory with the official Memory Create API and return the normalized created memory summary.

- **Service**: `langbase`
- **Action**: `create_memory`
- **Action id**: `langbase.create_memory`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "langbase" --action "create_memory"
```

## Run

```bash
oo connector run "langbase" --action "create_memory" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Langbase state. Confirm the exact payload and intended effect with the user before running.
