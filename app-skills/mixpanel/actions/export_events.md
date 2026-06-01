# Mixpanel · `export_events`

Export raw Mixpanel events for a project and date range.

- **Service**: `mixpanel`
- **Action**: `export_events`
- **Action id**: `mixpanel.export_events`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "export_events"
```

## Run

```bash
oo connector run "mixpanel" --action "export_events" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
