# Discord Bot · `get_public_keys`

Get Discord OAuth2 public keys.

- **Service**: `discordbot`
- **Action**: `get_public_keys`
- **Action id**: `discordbot.get_public_keys`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discordbot" --action "get_public_keys"
```

## Run

```bash
oo connector run "discordbot" --action "get_public_keys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
