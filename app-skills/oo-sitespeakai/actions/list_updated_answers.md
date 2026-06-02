# SiteSpeakAI · `list_updated_answers`

List the updated answers configured for one SiteSpeakAI chatbot.

- **Service**: `sitespeakai`
- **Action**: `list_updated_answers`
- **Action id**: `sitespeakai.list_updated_answers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "list_updated_answers"
```

## Run

```bash
oo connector run "sitespeakai" --action "list_updated_answers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
