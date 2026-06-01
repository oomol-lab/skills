# SiteSpeakAI · `delete_updated_answer`

Delete one SiteSpeakAI updated answer entry from a chatbot.

- **Service**: `sitespeakai`
- **Action**: `delete_updated_answer`
- **Action id**: `sitespeakai.delete_updated_answer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "delete_updated_answer"
```

## Run

```bash
oo connector run "sitespeakai" --action "delete_updated_answer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites SiteSpeakAI data. Always confirm the target and get explicit user approval before running.
