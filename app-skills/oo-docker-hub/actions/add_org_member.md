# Docker Hub · `add_org_member`

Invite a Docker ID or email address to join a Docker Hub organization by using the documented bulk invite endpoint with a single invitee.

- **Service**: `docker_hub`
- **Action**: `add_org_member`
- **Action id**: `docker_hub.add_org_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "add_org_member"
```

## Run

```bash
oo connector run "docker_hub" --action "add_org_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Docker Hub state. Confirm the exact payload and intended effect with the user before running.
