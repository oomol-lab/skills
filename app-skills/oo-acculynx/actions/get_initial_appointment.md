# AccuLynx · `get_initial_appointment`

Get the initial appointment for one AccuLynx job.

- **Service**: `acculynx`
- **Action**: `get_initial_appointment`
- **Action id**: `acculynx.get_initial_appointment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "get_initial_appointment"
```

## Run

```bash
oo connector run "acculynx" --action "get_initial_appointment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
