# APIVerve · `get_air_quality`

Get current air quality by city or ZIP code using APIVerve Air Quality.

- **Service**: `apiverve`
- **Action**: `get_air_quality`
- **Action id**: `apiverve.get_air_quality`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiverve" --action "get_air_quality"
```

## Run

```bash
oo connector run "apiverve" --action "get_air_quality" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
