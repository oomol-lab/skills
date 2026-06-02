# BigDataCloud · `get_network_by_ip`

Get BigDataCloud network and ASN details for an IP address.

- **Service**: `big_data_cloud`
- **Action**: `get_network_by_ip`
- **Action id**: `big_data_cloud.get_network_by_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "big_data_cloud" --action "get_network_by_ip"
```

## Run

```bash
oo connector run "big_data_cloud" --action "get_network_by_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
