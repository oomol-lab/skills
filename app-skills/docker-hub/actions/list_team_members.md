# Docker Hub · `list_team_members`

List members of a Docker Hub team within an organization.

- **Service**: `docker_hub`
- **Action**: `list_team_members`
- **Action id**: `docker_hub.list_team_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "list_team_members"
```

## Run

```bash
oo connector run "docker_hub" --action "list_team_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
