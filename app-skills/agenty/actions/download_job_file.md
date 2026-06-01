# Agenty · `download_job_file`

Download one named Agenty job file and return a downloadable file.

- **Service**: `agenty`
- **Action**: `download_job_file`
- **Action id**: `agenty.download_job_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "download_job_file"
```

## Run

```bash
oo connector run "agenty" --action "download_job_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
