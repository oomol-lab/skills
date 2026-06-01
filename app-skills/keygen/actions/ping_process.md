# Keygen · `ping_process`

Ping a Keygen process heartbeat.

- **Service**: `keygen`
- **Action**: `ping_process`
- **Action id**: `keygen.ping_process`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "ping_process"
```

## Run

```bash
oo connector run "keygen" --action "ping_process" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
