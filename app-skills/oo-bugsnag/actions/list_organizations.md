# Bugsnag · `list_organizations`

List the organizations accessible to the current Bugsnag user.

- **Service**: `bugsnag`
- **Action**: `list_organizations`
- **Action id**: `bugsnag.list_organizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugsnag" --action "list_organizations"
```

## Run

```bash
oo connector run "bugsnag" --action "list_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
