# SiteSpeakAI · `list_chatbots`

List every SiteSpeakAI chatbot available to the connected account.

- **Service**: `sitespeakai`
- **Action**: `list_chatbots`
- **Action id**: `sitespeakai.list_chatbots`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "list_chatbots"
```

## Run

```bash
oo connector run "sitespeakai" --action "list_chatbots" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
