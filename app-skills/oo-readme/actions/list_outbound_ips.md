# ReadMe · `list_outbound_ips`

List ReadMe outbound IP addresses used for webhook and Try It proxy requests.

- **Service**: `readme`
- **Action**: `list_outbound_ips`
- **Action id**: `readme.list_outbound_ips`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "list_outbound_ips"
```

## Run

```bash
oo connector run "readme" --action "list_outbound_ips" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
