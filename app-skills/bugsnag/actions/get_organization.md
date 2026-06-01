# Bugsnag · `get_organization`

Get a Bugsnag organization by organization ID.

- **Service**: `bugsnag`
- **Action**: `get_organization`
- **Action id**: `bugsnag.get_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bugsnag" --action "get_organization"
```

## Run

```bash
oo connector run "bugsnag" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
