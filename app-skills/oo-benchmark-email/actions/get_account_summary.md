# Benchmark Email · `get_account_summary`

Get the current Benchmark Email account summary and image storage plan details.

- **Service**: `benchmark_email`
- **Action**: `get_account_summary`
- **Action id**: `benchmark_email.get_account_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "benchmark_email" --action "get_account_summary"
```

## Run

```bash
oo connector run "benchmark_email" --action "get_account_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
