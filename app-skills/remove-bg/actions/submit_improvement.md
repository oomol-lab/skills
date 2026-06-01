# remove.bg · `submit_improvement`

Submit a source image to the remove.bg improvement program for future model quality improvements.

- **Service**: `remove_bg`
- **Action**: `submit_improvement`
- **Action id**: `remove_bg.submit_improvement`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "remove_bg" --action "submit_improvement"
```

## Run

```bash
oo connector run "remove_bg" --action "submit_improvement" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes remove.bg state. Confirm the exact payload and intended effect with the user before running.
