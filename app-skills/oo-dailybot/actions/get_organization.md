# Dailybot · `get_organization`

Get the Dailybot organization details for the authenticated API key.

- **Service**: `dailybot`
- **Action**: `get_organization`
- **Action id**: `dailybot.get_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dailybot" --action "get_organization"
```

## Run

```bash
oo connector run "dailybot" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
