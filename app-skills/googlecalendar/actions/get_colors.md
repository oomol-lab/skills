# Google Calendar · `get_colors`

Fetch the Google Calendar colors resource.

- **Service**: `googlecalendar`
- **Action**: `get_colors`
- **Action id**: `googlecalendar.get_colors`
- **Required scopes**: googlecalendar.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googlecalendar" --action "get_colors"
```

## Run

```bash
oo connector run "googlecalendar" --action "get_colors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
