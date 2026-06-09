# AgentMail · `get_thread_attachment`

Get metadata and download URL for an attachment in an AgentMail thread.

- **Service**: `agent_mail`
- **Action**: `get_thread_attachment`
- **Action id**: `agent_mail.get_thread_attachment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agent_mail" --action "get_thread_attachment"
```

## Run

```bash
oo connector run "agent_mail" --action "get_thread_attachment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
