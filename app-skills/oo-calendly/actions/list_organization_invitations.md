# Calendly · `list_organization_invitations`

List organization invitations for one Calendly organization.

- **Service**: `calendly`
- **Action**: `list_organization_invitations`
- **Action id**: `calendly.list_organization_invitations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "list_organization_invitations"
```

## Run

```bash
oo connector run "calendly" --action "list_organization_invitations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
