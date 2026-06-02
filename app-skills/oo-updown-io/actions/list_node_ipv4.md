# updown.io · `list_node_ipv4`

List all updown.io monitoring node IPv4 addresses.

- **Service**: `updown_io`
- **Action**: `list_node_ipv4`
- **Action id**: `updown_io.list_node_ipv4`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "updown_io" --action "list_node_ipv4"
```

## Run

```bash
oo connector run "updown_io" --action "list_node_ipv4" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
