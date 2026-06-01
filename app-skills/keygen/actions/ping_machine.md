# Keygen · `ping_machine`

Ping a Keygen machine heartbeat.

- **Service**: `keygen`
- **Action**: `ping_machine`
- **Action id**: `keygen.ping_machine`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "ping_machine"
```

## Run

```bash
oo connector run "keygen" --action "ping_machine" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
