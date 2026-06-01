# Interzoid · `get_ip_profile`

Retrieve Interzoid profile and reputation information for an IP address.

- **Service**: `interzoid`
- **Action**: `get_ip_profile`
- **Action id**: `interzoid.get_ip_profile`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "interzoid" --action "get_ip_profile"
```

## Run

```bash
oo connector run "interzoid" --action "get_ip_profile" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
