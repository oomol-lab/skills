# Docker Hub · `create_repository`

Create a Docker Hub repository inside a namespace.

- **Service**: `docker_hub`
- **Action**: `create_repository`
- **Action id**: `docker_hub.create_repository`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "create_repository"
```

## Run

```bash
oo connector run "docker_hub" --action "create_repository" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Docker Hub state. Confirm the exact payload and intended effect with the user before running.
