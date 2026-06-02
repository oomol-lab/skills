# Docparser · `ping`

Ping the Docparser API to verify that the provided API key is valid.

- **Service**: `docparser`
- **Action**: `ping`
- **Action id**: `docparser.ping`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docparser" --action "ping"
```

## Run

```bash
oo connector run "docparser" --action "ping" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
