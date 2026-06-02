# Shodan · `get_host`

Get Shodan host details for one IP address.

- **Service**: `shodan`
- **Action**: `get_host`
- **Action id**: `shodan.get_host`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shodan" --action "get_host"
```

## Run

```bash
oo connector run "shodan" --action "get_host" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
