# Agenty · `get_agent_templates`

List public Agenty agent templates with optional pagination and sorting parameters.

- **Service**: `agenty`
- **Action**: `get_agent_templates`
- **Action id**: `agenty.get_agent_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_agent_templates"
```

## Run

```bash
oo connector run "agenty" --action "get_agent_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
