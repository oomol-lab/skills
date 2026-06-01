# Canva · `get_url_asset_upload_job`

Get the current status and uploaded asset metadata for a Canva URL asset upload job.

- **Service**: `canva`
- **Action**: `get_url_asset_upload_job`
- **Action id**: `canva.get_url_asset_upload_job`
- **Required scopes**: canva.asset.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "get_url_asset_upload_job"
```

## Run

```bash
oo connector run "canva" --action "get_url_asset_upload_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canva state. Confirm the exact payload and intended effect with the user before running.
