# Todoist · `get_section`

Get a Todoist section by section ID.

- **Service**: `todoist`
- **Action**: `get_section`
- **Action id**: `todoist.get_section`
- **Required scopes**: todoist.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "todoist" --action "get_section"
```

## Run

```bash
oo connector run "todoist" --action "get_section" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
