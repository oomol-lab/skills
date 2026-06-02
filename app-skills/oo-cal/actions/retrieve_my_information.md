# Cal.com · `retrieve_my_information`

Compatibility alias for Composio's retrieve-my-information action. Returns the authenticated Cal.com user's profile.

- **Service**: `cal`
- **Action**: `retrieve_my_information`
- **Action id**: `cal.retrieve_my_information`
- **Required scopes**: cal.profile.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cal" --action "retrieve_my_information"
```

## Run

```bash
oo connector run "cal" --action "retrieve_my_information" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
