# Docker Hub · `list_teams`

List Docker Hub teams for an organization.

- **Service**: `docker_hub`
- **Action**: `list_teams`
- **Action id**: `docker_hub.list_teams`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "list_teams"
```

## Run

```bash
oo connector run "docker_hub" --action "list_teams" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
