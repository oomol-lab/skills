# SiteSpeakAI · `list_conversations`

Retrieve conversation history for one SiteSpeakAI chatbot.

- **Service**: `sitespeakai`
- **Action**: `list_conversations`
- **Action id**: `sitespeakai.list_conversations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "list_conversations"
```

## Run

```bash
oo connector run "sitespeakai" --action "list_conversations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
