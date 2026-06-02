# Agenty · `list_job_files`

List the files generated for one Agenty job.

- **Service**: `agenty`
- **Action**: `list_job_files`
- **Action id**: `agenty.list_job_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "list_job_files"
```

## Run

```bash
oo connector run "agenty" --action "list_job_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
