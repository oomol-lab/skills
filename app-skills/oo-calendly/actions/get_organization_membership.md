# Calendly · `get_organization_membership`

Retrieve one Calendly organization membership by membership URI.

- **Service**: `calendly`
- **Action**: `get_organization_membership`
- **Action id**: `calendly.get_organization_membership`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "get_organization_membership"
```

## Run

```bash
oo connector run "calendly" --action "get_organization_membership" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
