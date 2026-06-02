# SecurityTrails · `get_domain`

Get current DNS and domain details for one hostname from SecurityTrails.

- **Service**: `securitytrails`
- **Action**: `get_domain`
- **Action id**: `securitytrails.get_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "securitytrails" --action "get_domain"
```

## Run

```bash
oo connector run "securitytrails" --action "get_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
