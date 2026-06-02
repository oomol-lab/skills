# Discord Bot · `get_application`

Get an application by id.

- **Service**: `discordbot`
- **Action**: `get_application`
- **Action id**: `discordbot.get_application`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_application"
```

## Run

```bash
oo connector run "discordbot" --action "get_application" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
