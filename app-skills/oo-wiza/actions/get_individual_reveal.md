# Wiza · `get_individual_reveal`

Get the status and results of a Wiza individual reveal by ID, matching the WIZA_GET_INDIVIDUAL_REVEAL Composio tool.

- **Service**: `wiza`
- **Action**: `get_individual_reveal`
- **Action id**: `wiza.get_individual_reveal`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "wiza" --action "get_individual_reveal"
```

## Run

```bash
oo connector run "wiza" --action "get_individual_reveal" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
