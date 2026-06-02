# SiteSpeakAI · `query_chatbot`

Send a question to one SiteSpeakAI chatbot and return its answer plus source URLs.

- **Service**: `sitespeakai`
- **Action**: `query_chatbot`
- **Action id**: `sitespeakai.query_chatbot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "query_chatbot"
```

## Run

```bash
oo connector run "sitespeakai" --action "query_chatbot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
