# CircleCI · `trigger_pipeline`

Trigger a new CircleCI pipeline for a project.

- **Service**: `circleci`
- **Action**: `trigger_pipeline`
- **Action id**: `circleci.trigger_pipeline`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "circleci" --action "trigger_pipeline"
```

## Run

```bash
oo connector run "circleci" --action "trigger_pipeline" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes CircleCI state. Confirm the exact payload and intended effect with the user before running.
