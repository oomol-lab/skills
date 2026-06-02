# Vestaboard · `get_current_message`

Read the current message displayed by Vestaboard Cloud API.

- **Service**: `vestaboard`
- **Action**: `get_current_message`
- **Action id**: `vestaboard.get_current_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vestaboard" --action "get_current_message"
```

## Run

```bash
oo connector run "vestaboard" --action "get_current_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
