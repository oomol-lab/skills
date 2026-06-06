# QuickChart · `create_chart_short_url`

Create a QuickChart short URL for a Chart.js configuration and return the URL plus creation metadata.

- **Service**: `quickchart`
- **Action**: `create_chart_short_url`
- **Action id**: `quickchart.create_chart_short_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quickchart" --action "create_chart_short_url"
```

## Run

```bash
oo connector run "quickchart" --action "create_chart_short_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes QuickChart state. Confirm the exact payload and intended effect with the user before running.
