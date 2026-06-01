# SiteSpeakAI · `list_sources`

List the training sources and training statuses for one SiteSpeakAI chatbot.

- **Service**: `sitespeakai`
- **Action**: `list_sources`
- **Action id**: `sitespeakai.list_sources`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "list_sources"
```

## Run

```bash
oo connector run "sitespeakai" --action "list_sources" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
