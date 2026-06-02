# SiteSpeakAI · `get_chatbot`

Retrieve the full SiteSpeakAI settings object for one chatbot.

- **Service**: `sitespeakai`
- **Action**: `get_chatbot`
- **Action id**: `sitespeakai.get_chatbot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "get_chatbot"
```

## Run

```bash
oo connector run "sitespeakai" --action "get_chatbot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
