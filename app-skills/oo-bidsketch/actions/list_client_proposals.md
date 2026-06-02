# BidSketch · `list_client_proposals`

List proposals that belong to one BidSketch client.

- **Service**: `bidsketch`
- **Action**: `list_client_proposals`
- **Action id**: `bidsketch.list_client_proposals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bidsketch" --action "list_client_proposals"
```

## Run

```bash
oo connector run "bidsketch" --action "list_client_proposals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
