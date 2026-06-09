# GitLab · `create_project_issue`

Create a new issue in a GitLab project.

- **Service**: `gitlab`
- **Action**: `create_project_issue`
- **Action id**: `gitlab.create_project_issue`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitlab" --action "create_project_issue"
```

## Run

```bash
oo connector run "gitlab" --action "create_project_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes GitLab state. Confirm the exact payload and intended effect with the user before running.
