# Docker Hub · `get_tag`

Get metadata and image variants for a specific Docker Hub repository tag.

- **Service**: `docker_hub`
- **Action**: `get_tag`
- **Action id**: `docker_hub.get_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "get_tag"
```

## Run

```bash
oo connector run "docker_hub" --action "get_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
