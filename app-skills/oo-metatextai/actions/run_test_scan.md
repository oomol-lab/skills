# MetatextAI · `run_test_scan`

Run a MetatextAI red-team test scan for the connected application with the selected probes.

- **Service**: `metatextai`
- **Action**: `run_test_scan`
- **Action id**: `metatextai.run_test_scan`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "metatextai" --action "run_test_scan"
```

## Run

```bash
oo connector run "metatextai" --action "run_test_scan" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
