# Keygen · `reset_machine_heartbeat`

Reset a Keygen machine heartbeat.

- **Service**: `keygen`
- **Action**: `reset_machine_heartbeat`
- **Action id**: `keygen.reset_machine_heartbeat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keygen" --action "reset_machine_heartbeat"
```

## Run

```bash
oo connector run "keygen" --action "reset_machine_heartbeat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
