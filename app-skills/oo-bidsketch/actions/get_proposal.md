# BidSketch · `get_proposal`

Get one BidSketch proposal by proposal ID.

- **Service**: `bidsketch`
- **Action**: `get_proposal`
- **Action id**: `bidsketch.get_proposal`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bidsketch" --action "get_proposal"
```

## Run

```bash
oo connector run "bidsketch" --action "get_proposal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
