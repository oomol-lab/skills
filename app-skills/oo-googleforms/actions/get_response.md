# Google Forms · `get_response`

Retrieve a single Google Forms response by its response ID.

- **Service**: `googleforms`
- **Action**: `get_response`
- **Action id**: `googleforms.get_response`
- **Required scopes**: googleforms.responses.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleforms" --action "get_response"
```

## Run

```bash
oo connector run "googleforms" --action "get_response" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
