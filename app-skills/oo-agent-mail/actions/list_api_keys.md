# AgentMail · `list_api_keys`

List AgentMail API keys.

- **Service**: `agent_mail`
- **Action**: `list_api_keys`
- **Action id**: `agent_mail.list_api_keys`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "list_api_keys"
```

## Run

```bash
oo connector run "agent_mail" --action "list_api_keys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
