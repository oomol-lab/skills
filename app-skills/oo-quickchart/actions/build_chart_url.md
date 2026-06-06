# QuickChart · `build_chart_url`

Build a QuickChart image URL from a Chart.js configuration without downloading the rendered image.

- **Service**: `quickchart`
- **Action**: `build_chart_url`
- **Action id**: `quickchart.build_chart_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quickchart" --action "build_chart_url"
```

## Run

```bash
oo connector run "quickchart" --action "build_chart_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
