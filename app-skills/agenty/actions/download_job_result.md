# Agenty · `download_job_result`

Download one Agenty job export as raw text content.

- **Service**: `agenty`
- **Action**: `download_job_result`
- **Action id**: `agenty.download_job_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "download_job_result"
```

## Run

```bash
oo connector run "agenty" --action "download_job_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
