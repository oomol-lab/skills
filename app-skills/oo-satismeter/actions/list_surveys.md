# SatisMeter · `list_surveys`

List surveys configured in a SatisMeter project.

- **Service**: `satismeter`
- **Action**: `list_surveys`
- **Action id**: `satismeter.list_surveys`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "satismeter" --action "list_surveys"
```

## Run

```bash
oo connector run "satismeter" --action "list_surveys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
