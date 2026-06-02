# Klangio · `download_job_result`

Download a generated Klangio job result file and upload it to OOMOL OSS transit storage.

- **Service**: `klangio`
- **Action**: `download_job_result`
- **Action id**: `klangio.download_job_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klangio" --action "download_job_result"
```

## Run

```bash
oo connector run "klangio" --action "download_job_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
