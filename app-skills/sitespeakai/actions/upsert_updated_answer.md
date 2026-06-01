# SiteSpeakAI · `upsert_updated_answer`

Create or update one SiteSpeakAI updated answer entry for a chatbot.

- **Service**: `sitespeakai`
- **Action**: `upsert_updated_answer`
- **Action id**: `sitespeakai.upsert_updated_answer`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sitespeakai" --action "upsert_updated_answer"
```

## Run

```bash
oo connector run "sitespeakai" --action "upsert_updated_answer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes SiteSpeakAI state. Confirm the exact payload and intended effect with the user before running.
