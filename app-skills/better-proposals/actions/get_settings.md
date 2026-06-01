# Better Proposals · `get_settings`

Get current Better Proposals account settings such as tax and timezone defaults.

- **Service**: `better_proposals`
- **Action**: `get_settings`
- **Action id**: `better_proposals.get_settings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "better_proposals" --action "get_settings"
```

## Run

```bash
oo connector run "better_proposals" --action "get_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
