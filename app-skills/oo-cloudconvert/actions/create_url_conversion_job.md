# CloudConvert · `create_url_conversion_job`

Create a CloudConvert job that imports a remote file URL, converts it, and exports the result via `export/url`.

- **Service**: `cloudconvert`
- **Action**: `create_url_conversion_job`
- **Action id**: `cloudconvert.create_url_conversion_job`
- **Required scopes**: task.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudconvert" --action "create_url_conversion_job"
```

## Run

```bash
oo connector run "cloudconvert" --action "create_url_conversion_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes CloudConvert state. Confirm the exact payload and intended effect with the user before running.
