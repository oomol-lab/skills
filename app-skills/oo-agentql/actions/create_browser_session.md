# AgentQL · `create_browser_session`

Create an AgentQL Tetra remote browser session and return the session, CDP, and base URLs.

- **Service**: `agentql`
- **Action**: `create_browser_session`
- **Action id**: `agentql.create_browser_session`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agentql" --action "create_browser_session"
```

## Run

```bash
oo connector run "agentql" --action "create_browser_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AgentQL state. Confirm the exact payload and intended effect with the user before running.
