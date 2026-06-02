# Calendly · `delete_organization_membership`

Delete one Calendly organization membership by membership URI.

- **Service**: `calendly`
- **Action**: `delete_organization_membership`
- **Action id**: `calendly.delete_organization_membership`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "delete_organization_membership"
```

## Run

```bash
oo connector run "calendly" --action "delete_organization_membership" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Calendly data. Always confirm the target and get explicit user approval before running.
