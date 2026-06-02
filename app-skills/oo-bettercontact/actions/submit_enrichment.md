# BetterContact · `submit_enrichment`

Submit one or more leads to BetterContact waterfall enrichment and return the request handle.

- **Service**: `bettercontact`
- **Action**: `submit_enrichment`
- **Action id**: `bettercontact.submit_enrichment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bettercontact" --action "submit_enrichment"
```

## Run

```bash
oo connector run "bettercontact" --action "submit_enrichment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes BetterContact state. Confirm the exact payload and intended effect with the user before running.
