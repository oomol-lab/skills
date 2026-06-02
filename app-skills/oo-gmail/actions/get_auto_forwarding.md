# Gmail · `get_auto_forwarding`

Get the current Gmail auto-forwarding configuration, including enabled status, forwarding address, and disposition.

- **Service**: `gmail`
- **Action**: `get_auto_forwarding`
- **Action id**: `gmail.get_auto_forwarding`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "get_auto_forwarding"
```

## Run

```bash
oo connector run "gmail" --action "get_auto_forwarding" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
