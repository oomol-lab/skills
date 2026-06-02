# Benchmark Email · `get_contacts_in_list`

Get paginated contacts from a Benchmark Email list with optional search, filter, and sorting parameters.

- **Service**: `benchmark_email`
- **Action**: `get_contacts_in_list`
- **Action id**: `benchmark_email.get_contacts_in_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "benchmark_email" --action "get_contacts_in_list"
```

## Run

```bash
oo connector run "benchmark_email" --action "get_contacts_in_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
