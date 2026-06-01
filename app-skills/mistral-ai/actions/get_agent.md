# Mistral AI · `get_agent`

Get a single Agent by Agent ID, optionally specifying agent_version.

- **Service**: `mistral_ai`
- **Action**: `get_agent`
- **Action id**: `mistral_ai.get_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "get_agent"
```

## Run

```bash
oo connector run "mistral_ai" --action "get_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
