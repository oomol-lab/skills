# Canva · `create_url_asset_upload_job`

Start an asynchronous Canva asset upload job from a publicly accessible URL and return the job handle for polling.

- **Service**: `canva`
- **Action**: `create_url_asset_upload_job`
- **Action id**: `canva.create_url_asset_upload_job`
- **Required scopes**: canva.asset.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canva" --action "create_url_asset_upload_job"
```

## Run

```bash
oo connector run "canva" --action "create_url_asset_upload_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canva state. Confirm the exact payload and intended effect with the user before running.
