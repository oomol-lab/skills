# Lessonspace · `list_organisation_sessions`

List Lessonspace sessions for one organisation with official filter parameters.

- **Service**: `lessonspace`
- **Action**: `list_organisation_sessions`
- **Action id**: `lessonspace.list_organisation_sessions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lessonspace" --action "list_organisation_sessions"
```

## Run

```bash
oo connector run "lessonspace" --action "list_organisation_sessions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
