# IPinfo · `get_current_ip`

Retrieve the caller's current public IP address as plain text.

- **Service**: `ipinfo_io`
- **Action**: `get_current_ip`
- **Action id**: `ipinfo_io.get_current_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_current_ip"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_current_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
