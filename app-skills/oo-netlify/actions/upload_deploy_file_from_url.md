# Netlify · `upload_deploy_file_from_url`

Upload one file into an existing Netlify deploy by downloading a public file URL first.

- **Service**: `netlify`
- **Action**: `upload_deploy_file_from_url`
- **Action id**: `netlify.upload_deploy_file_from_url`
- **Required scopes**: netlify.deploy.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "upload_deploy_file_from_url"
```

## Run

```bash
oo connector run "netlify" --action "upload_deploy_file_from_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Netlify state. Confirm the exact payload and intended effect with the user before running.
