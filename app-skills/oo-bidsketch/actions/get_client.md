# BidSketch · `get_client`

Get one BidSketch client by client ID.

- **Service**: `bidsketch`
- **Action**: `get_client`
- **Action id**: `bidsketch.get_client`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bidsketch" --action "get_client"
```

## Run

```bash
oo connector run "bidsketch" --action "get_client" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
