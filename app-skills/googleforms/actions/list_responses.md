# Google Forms · `list_responses`

List responses for a Google Form with optional filtering and pagination.

- **Service**: `googleforms`
- **Action**: `list_responses`
- **Action id**: `googleforms.list_responses`
- **Required scopes**: googleforms.responses.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleforms" --action "list_responses"
```

## Run

```bash
oo connector run "googleforms" --action "list_responses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
