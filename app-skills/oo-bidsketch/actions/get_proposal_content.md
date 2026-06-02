# BidSketch · `get_proposal_content`

Get one BidSketch proposal with its grouped sections and fees.

- **Service**: `bidsketch`
- **Action**: `get_proposal_content`
- **Action id**: `bidsketch.get_proposal_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bidsketch" --action "get_proposal_content"
```

## Run

```bash
oo connector run "bidsketch" --action "get_proposal_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
