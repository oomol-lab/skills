# AgentMail · `get_raw_message`

Get a presigned download URL for the raw EML version of an AgentMail message.

- **Service**: `agent_mail`
- **Action**: `get_raw_message`
- **Action id**: `agent_mail.get_raw_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_raw_message"
```

## Run

```bash
oo connector run "agent_mail" --action "get_raw_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
