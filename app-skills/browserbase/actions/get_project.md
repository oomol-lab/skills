# Browserbase · `get_project`

Get one Browserbase project by project identifier.

- **Service**: `browserbase`
- **Action**: `get_project`
- **Action id**: `browserbase.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browserbase" --action "get_project"
```

## Run

```bash
oo connector run "browserbase" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
