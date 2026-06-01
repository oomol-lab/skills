# ChatBotKit · `fetch_dataset`

Fetch a single ChatBotKit dataset by ID.

- **Service**: `chatbotkit`
- **Action**: `fetch_dataset`
- **Action id**: `chatbotkit.fetch_dataset`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "fetch_dataset"
```

## Run

```bash
oo connector run "chatbotkit" --action "fetch_dataset" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
