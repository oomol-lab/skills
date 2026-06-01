# GTmetrix · `start_test`

Start a new GTmetrix performance test for a URL.

- **Service**: `gtmetrix`
- **Action**: `start_test`
- **Action id**: `gtmetrix.start_test`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "start_test"
```

## Run

```bash
oo connector run "gtmetrix" --action "start_test" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
