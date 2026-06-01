# AccuLynx · `get_company_settings`

Get the current AccuLynx company settings for the connected location.

- **Service**: `acculynx`
- **Action**: `get_company_settings`
- **Action id**: `acculynx.get_company_settings`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "get_company_settings"
```

## Run

```bash
oo connector run "acculynx" --action "get_company_settings" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
