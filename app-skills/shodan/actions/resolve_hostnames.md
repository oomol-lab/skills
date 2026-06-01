# Shodan · `resolve_hostnames`

Resolve hostnames to IP addresses with the Shodan DNS resolve endpoint.

- **Service**: `shodan`
- **Action**: `resolve_hostnames`
- **Action id**: `shodan.resolve_hostnames`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shodan" --action "resolve_hostnames"
```

## Run

```bash
oo connector run "shodan" --action "resolve_hostnames" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
