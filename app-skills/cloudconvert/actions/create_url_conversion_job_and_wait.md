# CloudConvert · `create_url_conversion_job_and_wait`

Create a URL-based CloudConvert conversion job and wait synchronously until the job finishes.

- **Service**: `cloudconvert`
- **Action**: `create_url_conversion_job_and_wait`
- **Action id**: `cloudconvert.create_url_conversion_job_and_wait`
- **Required scopes**: task.read, task.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "create_url_conversion_job_and_wait"
```

## Run

```bash
oo connector run "cloudconvert" --action "create_url_conversion_job_and_wait" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes CloudConvert state. Confirm the exact payload and intended effect with the user before running.
