# Control D · `get_current_ip`

Return the current IP address and datacenter seen by the Control D API for troubleshooting API token allowed-IP issues.

- **Service**: `control_d`
- **Action**: `get_current_ip`
- **Action id**: `control_d.get_current_ip`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "control_d" --action "get_current_ip"
```

## Run

```bash
oo connector run "control_d" --action "get_current_ip" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
