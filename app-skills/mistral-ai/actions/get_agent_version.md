# Mistral AI · `get_agent_version`

Get version details of the specified Agent.

- **Service**: `mistral_ai`
- **Action**: `get_agent_version`
- **Action id**: `mistral_ai.get_agent_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_agent_version"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_agent_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
