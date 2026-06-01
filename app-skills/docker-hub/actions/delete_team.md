# Docker Hub · `delete_team`

Delete a Docker Hub team within an organization.

- **Service**: `docker_hub`
- **Action**: `delete_team`
- **Action id**: `docker_hub.delete_team`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "delete_team"
```

## Run

```bash
oo connector run "docker_hub" --action "delete_team" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Docker Hub data. Always confirm the target and get explicit user approval before running.
