# Benchmark Email · `get_contact_details`

Get detailed information for a specific Benchmark Email contact email within a specific list.

- **Service**: `benchmark_email`
- **Action**: `get_contact_details`
- **Action id**: `benchmark_email.get_contact_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "benchmark_email" --action "get_contact_details"
```

## Run

```bash
oo connector run "benchmark_email" --action "get_contact_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
