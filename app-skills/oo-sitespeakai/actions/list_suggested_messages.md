# SiteSpeakAI · `list_suggested_messages`

List the suggested visitor prompts configured for one SiteSpeakAI chatbot.

- **Service**: `sitespeakai`
- **Action**: `list_suggested_messages`
- **Action id**: `sitespeakai.list_suggested_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "list_suggested_messages"
```

## Run

```bash
oo connector run "sitespeakai" --action "list_suggested_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
