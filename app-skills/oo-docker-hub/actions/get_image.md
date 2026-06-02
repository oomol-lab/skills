# Docker Hub · `get_image`

Find a Docker Hub image variant by digest by scanning the repository's published tags. This is a repo-level helper built on the official tag listing responses.

- **Service**: `docker_hub`
- **Action**: `get_image`
- **Action id**: `docker_hub.get_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docker_hub" --action "get_image"
```

## Run

```bash
oo connector run "docker_hub" --action "get_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
