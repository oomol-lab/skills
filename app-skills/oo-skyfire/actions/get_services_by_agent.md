# Skyfire · `get_services_by_agent`

List all approved and active Skyfire marketplace services owned by one seller agent.

- **Service**: `skyfire`
- **Action**: `get_services_by_agent`
- **Action id**: `skyfire.get_services_by_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "skyfire" --action "get_services_by_agent"
```

## Run

```bash
oo connector run "skyfire" --action "get_services_by_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
