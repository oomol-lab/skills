# DataScope · `create_list_element`

Create one DataScope metadata list element under a metadata list type.

- **Service**: `datascope`
- **Action**: `create_list_element`
- **Action id**: `datascope.create_list_element`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "datascope" --action "create_list_element"
```

## Run

```bash
oo connector run "datascope" --action "create_list_element" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes DataScope state. Confirm the exact payload and intended effect with the user before running.
