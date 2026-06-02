# ChatBotKit · `fetch_file`

Fetch a single ChatBotKit file by ID.

- **Service**: `chatbotkit`
- **Action**: `fetch_file`
- **Action id**: `chatbotkit.fetch_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatbotkit" --action "fetch_file"
```

## Run

```bash
oo connector run "chatbotkit" --action "fetch_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
