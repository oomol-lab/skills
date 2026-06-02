# Webshare · `get_proxy_config`

Get the Webshare proxy configuration for a plan.

- **Service**: `webshare`
- **Action**: `get_proxy_config`
- **Action id**: `webshare.get_proxy_config`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webshare" --action "get_proxy_config"
```

## Run

```bash
oo connector run "webshare" --action "get_proxy_config" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
