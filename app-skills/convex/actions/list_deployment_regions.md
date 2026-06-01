# Convex · `list_deployment_regions`

List available deployment regions for a Convex team.

- **Service**: `convex`
- **Action**: `list_deployment_regions`
- **Action id**: `convex.list_deployment_regions`
- **Required scopes**: convex.projects.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "list_deployment_regions"
```

## Run

```bash
oo connector run "convex" --action "list_deployment_regions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
