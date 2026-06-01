# Better Stack · `get_incident`

Get a Better Stack incident by ID with included resource context when available.

- **Service**: `better_stack`
- **Action**: `get_incident`
- **Action id**: `better_stack.get_incident`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_stack" --action "get_incident"
```

## Run

```bash
oo connector run "better_stack" --action "get_incident" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
