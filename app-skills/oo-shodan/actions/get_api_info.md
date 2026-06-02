# Shodan · `get_api_info`

Get API account information and remaining credits from Shodan.

- **Service**: `shodan`
- **Action**: `get_api_info`
- **Action id**: `shodan.get_api_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shodan" --action "get_api_info"
```

## Run

```bash
oo connector run "shodan" --action "get_api_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
