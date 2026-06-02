# Habitica · `score_task`

Score one Habitica task in the up or down direction.

- **Service**: `habitica`
- **Action**: `score_task`
- **Action id**: `habitica.score_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "habitica" --action "score_task"
```

## Run

```bash
oo connector run "habitica" --action "score_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
