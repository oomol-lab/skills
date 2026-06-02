# AgentQL · `list_session_usage`

List AgentQL Tetra session telemetry entries with optional filters and pagination controls.

- **Service**: `agentql`
- **Action**: `list_session_usage`
- **Action id**: `agentql.list_session_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agentql" --action "list_session_usage"
```

## Run

```bash
oo connector run "agentql" --action "list_session_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
