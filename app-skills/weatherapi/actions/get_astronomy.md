# WeatherAPI · `get_astronomy`

Get astronomy information for a WeatherAPI location query and date.

- **Service**: `weatherapi`
- **Action**: `get_astronomy`
- **Action id**: `weatherapi.get_astronomy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "weatherapi" --action "get_astronomy"
```

## Run

```bash
oo connector run "weatherapi" --action "get_astronomy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
