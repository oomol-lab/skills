# cloudlayer.io · `create_url_pdf_job`

Create an asynchronous cloudlayer.io URL-to-PDF job for one public webpage and return the new job status.

- **Service**: `cloudlayer`
- **Action**: `create_url_pdf_job`
- **Action id**: `cloudlayer.create_url_pdf_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudlayer" --action "create_url_pdf_job"
```

## Run

```bash
oo connector run "cloudlayer" --action "create_url_pdf_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes cloudlayer.io state. Confirm the exact payload and intended effect with the user before running.
