# Calendly · `create_organization_invitation`

Create one organization invitation for a Calendly organization.

- **Service**: `calendly`
- **Action**: `create_organization_invitation`
- **Action id**: `calendly.create_organization_invitation`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "calendly" --action "create_organization_invitation"
```

## Run

```bash
oo connector run "calendly" --action "create_organization_invitation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Calendly state. Confirm the exact payload and intended effect with the user before running.
