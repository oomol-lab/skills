# AgentQL · `get_usage`

Get AgentQL account and API key usage counters for the current billing cycle and lifetime totals.

- **Service**: `agentql`
- **Action**: `get_usage`
- **Action id**: `agentql.get_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agentql" --action "get_usage"
```

## Run

```bash
oo connector run "agentql" --action "get_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
