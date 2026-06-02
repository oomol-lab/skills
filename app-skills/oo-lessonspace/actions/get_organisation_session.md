# Lessonspace · `get_organisation_session`

Get one Lessonspace organisation session by session UUID.

- **Service**: `lessonspace`
- **Action**: `get_organisation_session`
- **Action id**: `lessonspace.get_organisation_session`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lessonspace" --action "get_organisation_session"
```

## Run

```bash
oo connector run "lessonspace" --action "get_organisation_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
