# Google Forms · `list_watches`

List watches configured for a Google Form.

- **Service**: `googleforms`
- **Action**: `list_watches`
- **Action id**: `googleforms.list_watches`
- **Required scopes**: googleforms.read, googleforms.responses.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleforms" --action "list_watches"
```

## Run

```bash
oo connector run "googleforms" --action "list_watches" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
