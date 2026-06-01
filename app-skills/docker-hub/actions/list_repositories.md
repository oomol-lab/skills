# Docker Hub · `list_repositories`

List Docker Hub repositories in a namespace with optional name filtering and ordering.

- **Service**: `docker_hub`
- **Action**: `list_repositories`
- **Action id**: `docker_hub.list_repositories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "list_repositories"
```

## Run

```bash
oo connector run "docker_hub" --action "list_repositories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
