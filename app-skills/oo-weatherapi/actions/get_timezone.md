# WeatherAPI · `get_timezone`

Get timezone information for a WeatherAPI location query.

- **Service**: `weatherapi`
- **Action**: `get_timezone`
- **Action id**: `weatherapi.get_timezone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "weatherapi" --action "get_timezone"
```

## Run

```bash
oo connector run "weatherapi" --action "get_timezone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
