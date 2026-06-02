# Zoom · `get_meeting_summary`

Fetch the AI Companion summary for a Zoom meeting when available.

- **Service**: `zoom`
- **Action**: `get_meeting_summary`
- **Action id**: `zoom.get_meeting_summary`
- **Required scopes**: meeting:read:summary:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "get_meeting_summary"
```

## Run

```bash
oo connector run "zoom" --action "get_meeting_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
