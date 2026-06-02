# AgentQL · `query_data`

Query a webpage with AgentQL and return the extracted structured data plus AgentQL metadata.

- **Service**: `agentql`
- **Action**: `query_data`
- **Action id**: `agentql.query_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agentql" --action "query_data"
```

## Run

```bash
oo connector run "agentql" --action "query_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
