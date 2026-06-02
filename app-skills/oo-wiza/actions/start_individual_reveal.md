# Wiza · `start_individual_reveal`

Start a Wiza individual reveal for real-time single contact enrichment, matching the WIZA_START_INDIVIDUAL_REVEAL Composio tool.

- **Service**: `wiza`
- **Action**: `start_individual_reveal`
- **Action id**: `wiza.start_individual_reveal`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wiza" --action "start_individual_reveal"
```

## Run

```bash
oo connector run "wiza" --action "start_individual_reveal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
