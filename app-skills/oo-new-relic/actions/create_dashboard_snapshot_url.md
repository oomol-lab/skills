# New Relic · `create_dashboard_snapshot_url`

Generate a snapshot URL for a New Relic dashboard page GUID.

- **Service**: `new_relic`
- **Action**: `create_dashboard_snapshot_url`
- **Action id**: `new_relic.create_dashboard_snapshot_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "new_relic" --action "create_dashboard_snapshot_url"
```

## Run

```bash
oo connector run "new_relic" --action "create_dashboard_snapshot_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes New Relic state. Confirm the exact payload and intended effect with the user before running.
