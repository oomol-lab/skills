# Convex · `create_project`

Create a Convex project on a team, optionally provisioning an initial dev or prod deployment.

- **Service**: `convex`
- **Action**: `create_project`
- **Action id**: `convex.create_project`
- **Required scopes**: convex.projects.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "convex" --action "create_project"
```

## Run

```bash
oo connector run "convex" --action "create_project" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Convex state. Confirm the exact payload and intended effect with the user before running.
