# Docker Hub · `remove_team_member`

Remove a user from a Docker Hub team within an organization.

- **Service**: `docker_hub`
- **Action**: `remove_team_member`
- **Action id**: `docker_hub.remove_team_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "remove_team_member"
```

## Run

```bash
oo connector run "docker_hub" --action "remove_team_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Docker Hub data. Always confirm the target and get explicit user approval before running.
