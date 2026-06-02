# Calendarific · `list_supported_countries`

List countries currently supported by Calendarific.

- **Service**: `calendarific`
- **Action**: `list_supported_countries`
- **Action id**: `calendarific.list_supported_countries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendarific" --action "list_supported_countries"
```

## Run

```bash
oo connector run "calendarific" --action "list_supported_countries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
