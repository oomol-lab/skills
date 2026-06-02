# Calendly · `list_organization_memberships`

List Calendly organization memberships for one organization or one user.

- **Service**: `calendly`
- **Action**: `list_organization_memberships`
- **Action id**: `calendly.list_organization_memberships`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_organization_memberships"
```

## Run

```bash
oo connector run "calendly" --action "list_organization_memberships" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
