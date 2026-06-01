# AccuLynx · `list_calendars`

List the calendars available in the current AccuLynx location.

- **Service**: `acculynx`
- **Action**: `list_calendars`
- **Action id**: `acculynx.list_calendars`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "list_calendars"
```

## Run

```bash
oo connector run "acculynx" --action "list_calendars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
