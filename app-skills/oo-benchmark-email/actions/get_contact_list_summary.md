# Benchmark Email · `get_contact_list_summary`

Get summary counts for a Benchmark Email contact list, including active, bounced, pending, and unsubscribed contacts.

- **Service**: `benchmark_email`
- **Action**: `get_contact_list_summary`
- **Action id**: `benchmark_email.get_contact_list_summary`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "benchmark_email" --action "get_contact_list_summary"
```

## Run

```bash
oo connector run "benchmark_email" --action "get_contact_list_summary" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
