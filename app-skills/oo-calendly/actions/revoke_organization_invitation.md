# Calendly · `revoke_organization_invitation`

Revoke one organization invitation from a Calendly organization.

- **Service**: `calendly`
- **Action**: `revoke_organization_invitation`
- **Action id**: `calendly.revoke_organization_invitation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "revoke_organization_invitation"
```

## Run

```bash
oo connector run "calendly" --action "revoke_organization_invitation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Calendly data. Always confirm the target and get explicit user approval before running.
