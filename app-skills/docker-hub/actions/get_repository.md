# Docker Hub · `get_repository`

Get detailed metadata for a Docker Hub repository within a namespace.

- **Service**: `docker_hub`
- **Action**: `get_repository`
- **Action id**: `docker_hub.get_repository`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "get_repository"
```

## Run

```bash
oo connector run "docker_hub" --action "get_repository" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
