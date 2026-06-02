# Discord · `get_public_keys`

Get Discord OAuth2 public keys as JWKS.

- **Service**: `discord`
- **Action**: `get_public_keys`
- **Action id**: `discord.get_public_keys`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "discord" --action "get_public_keys"
```

## Run

```bash
oo connector run "discord" --action "get_public_keys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
