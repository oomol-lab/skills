# ParseHub · `get_project`

Get one ParseHub project by project token from the API key's accessible project list.

- **Service**: `parsehub`
- **Action**: `get_project`
- **Action id**: `parsehub.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "parsehub" --action "get_project"
```

## Run

```bash
oo connector run "parsehub" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
