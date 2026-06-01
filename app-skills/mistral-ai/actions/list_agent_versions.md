# Mistral AI · `list_agent_versions`

Lists all versions of the specified Agent.

- **Service**: `mistral_ai`
- **Action**: `list_agent_versions`
- **Action id**: `mistral_ai.list_agent_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "list_agent_versions"
```

## Run

```bash
oo connector run "mistral_ai" --action "list_agent_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
