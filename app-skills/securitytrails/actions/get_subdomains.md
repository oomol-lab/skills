# SecurityTrails · `get_subdomains`

List known subdomains for one hostname from SecurityTrails.

- **Service**: `securitytrails`
- **Action**: `get_subdomains`
- **Action id**: `securitytrails.get_subdomains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "securitytrails" --action "get_subdomains"
```

## Run

```bash
oo connector run "securitytrails" --action "get_subdomains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
