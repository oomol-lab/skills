# GitLab · `get_project`

Get a GitLab project by numeric ID or URL-encoded path with namespace.

- **Service**: `gitlab`
- **Action**: `get_project`
- **Action id**: `gitlab.get_project`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitlab" --action "get_project"
```

## Run

```bash
oo connector run "gitlab" --action "get_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
