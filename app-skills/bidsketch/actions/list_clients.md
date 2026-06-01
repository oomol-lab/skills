# BidSketch · `list_clients`

List clients available in the authenticated BidSketch account.

- **Service**: `bidsketch`
- **Action**: `list_clients`
- **Action id**: `bidsketch.list_clients`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bidsketch" --action "list_clients"
```

## Run

```bash
oo connector run "bidsketch" --action "list_clients" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
