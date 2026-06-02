# Calendarific · `list_supported_languages`

List languages currently supported by Calendarific.

- **Service**: `calendarific`
- **Action**: `list_supported_languages`
- **Action id**: `calendarific.list_supported_languages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendarific" --action "list_supported_languages"
```

## Run

```bash
oo connector run "calendarific" --action "list_supported_languages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
