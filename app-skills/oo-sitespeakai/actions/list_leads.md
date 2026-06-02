# SiteSpeakAI · `list_leads`

List the leads captured by one SiteSpeakAI chatbot.

- **Service**: `sitespeakai`
- **Action**: `list_leads`
- **Action id**: `sitespeakai.list_leads`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "list_leads"
```

## Run

```bash
oo connector run "sitespeakai" --action "list_leads" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
