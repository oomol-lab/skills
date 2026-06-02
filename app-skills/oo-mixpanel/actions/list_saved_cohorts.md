# Mixpanel · `list_saved_cohorts`

List saved cohorts available in a Mixpanel project.

- **Service**: `mixpanel`
- **Action**: `list_saved_cohorts`
- **Action id**: `mixpanel.list_saved_cohorts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "list_saved_cohorts"
```

## Run

```bash
oo connector run "mixpanel" --action "list_saved_cohorts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
