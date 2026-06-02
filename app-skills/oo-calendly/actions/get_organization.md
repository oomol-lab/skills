# Calendly · `get_organization`

Retrieve one Calendly organization by organization URI.

- **Service**: `calendly`
- **Action**: `get_organization`
- **Action id**: `calendly.get_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_organization"
```

## Run

```bash
oo connector run "calendly" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
