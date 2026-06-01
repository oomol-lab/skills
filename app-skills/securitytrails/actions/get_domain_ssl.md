# SecurityTrails · `get_domain_ssl`

Get SSL certificate details for one hostname from SecurityTrails.

- **Service**: `securitytrails`
- **Action**: `get_domain_ssl`
- **Action id**: `securitytrails.get_domain_ssl`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "securitytrails" --action "get_domain_ssl"
```

## Run

```bash
oo connector run "securitytrails" --action "get_domain_ssl" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
