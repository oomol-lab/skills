# Microsoft Clarity · `export_live_insights`

Export Microsoft Clarity live insights for the last 1 to 3 days with up to three optional breakdown dimensions.

- **Service**: `microsoft_clarity`
- **Action**: `export_live_insights`
- **Action id**: `microsoft_clarity.export_live_insights`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "microsoft_clarity" --action "export_live_insights"
```

## Run

```bash
oo connector run "microsoft_clarity" --action "export_live_insights" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
