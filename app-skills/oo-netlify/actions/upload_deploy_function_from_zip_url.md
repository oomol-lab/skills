# Netlify · `upload_deploy_function_from_zip_url`

Upload one Netlify function bundle into an existing deploy by downloading a public zip file URL first.

- **Service**: `netlify`
- **Action**: `upload_deploy_function_from_zip_url`
- **Action id**: `netlify.upload_deploy_function_from_zip_url`
- **Required scopes**: netlify.deploy.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "upload_deploy_function_from_zip_url"
```

## Run

```bash
oo connector run "netlify" --action "upload_deploy_function_from_zip_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Netlify state. Confirm the exact payload and intended effect with the user before running.
