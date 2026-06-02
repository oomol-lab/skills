# SecurityTrails · `find_associated_domains`

Find domains associated with one hostname in SecurityTrails.

- **Service**: `securitytrails`
- **Action**: `find_associated_domains`
- **Action id**: `securitytrails.find_associated_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "securitytrails" --action "find_associated_domains"
```

## Run

```bash
oo connector run "securitytrails" --action "find_associated_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
