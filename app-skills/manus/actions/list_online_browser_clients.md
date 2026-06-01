# Manus · `list_online_browser_clients`

List online Manus browser clients that can be selected when confirming needConnectMyBrowser waiting events.

- **Service**: `manus`
- **Action**: `list_online_browser_clients`
- **Action id**: `manus.list_online_browser_clients`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "list_online_browser_clients"
```

## Run

```bash
oo connector run "manus" --action "list_online_browser_clients" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
