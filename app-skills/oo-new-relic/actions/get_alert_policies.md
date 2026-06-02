# New Relic · `get_alert_policies`

List New Relic alert policies with optional name, incident preference, and pagination filters using the REST alerts API.

- **Service**: `new_relic`
- **Action**: `get_alert_policies`
- **Action id**: `new_relic.get_alert_policies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "get_alert_policies"
```

## Run

```bash
oo connector run "new_relic" --action "get_alert_policies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
