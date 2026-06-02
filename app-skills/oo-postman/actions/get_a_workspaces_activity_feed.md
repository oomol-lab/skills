# Postman · `get_a_workspaces_activity_feed`

Tool to get a workspace's activity feed showing who added or removed collections, environments, or elements, and users joining or leaving. Use when you need to track workspace changes and user activity.

- **Service**: `postman`
- **Action**: `get_a_workspaces_activity_feed`
- **Action id**: `postman.get_a_workspaces_activity_feed`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_a_workspaces_activity_feed"
```

## Run

```bash
oo connector run "postman" --action "get_a_workspaces_activity_feed" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
