# Outlook · `get_profile`

Get the current Outlook account profile from Microsoft Graph so you can identify the connected mailbox.

- **Service**: `outlook`
- **Action**: `get_profile`
- **Action id**: `outlook.get_profile`
- **Required scopes**: outlook.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outlook" --action "get_profile"
```

## Run

```bash
oo connector run "outlook" --action "get_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
