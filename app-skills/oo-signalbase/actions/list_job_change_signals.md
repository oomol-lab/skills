# Signalbase · `list_job_change_signals`

Fetch Signalbase job-change signals with person, role, company, LinkedIn, and sorting filters.

- **Service**: `signalbase`
- **Action**: `list_job_change_signals`
- **Action id**: `signalbase.list_job_change_signals`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "signalbase" --action "list_job_change_signals"
```

## Run

```bash
oo connector run "signalbase" --action "list_job_change_signals" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
