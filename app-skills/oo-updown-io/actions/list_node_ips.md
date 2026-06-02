# updown.io · `list_node_ips`

List all updown.io monitoring node IP addresses.

- **Service**: `updown_io`
- **Action**: `list_node_ips`
- **Action id**: `updown_io.list_node_ips`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "updown_io" --action "list_node_ips"
```

## Run

```bash
oo connector run "updown_io" --action "list_node_ips" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
