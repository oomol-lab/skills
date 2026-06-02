# Netlify · `create_site_deploy_from_zip_url`

Create a Netlify site deploy by downloading a public zip file URL and uploading it to Netlify.

- **Service**: `netlify`
- **Action**: `create_site_deploy_from_zip_url`
- **Action id**: `netlify.create_site_deploy_from_zip_url`
- **Required scopes**: netlify.deploy.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "create_site_deploy_from_zip_url"
```

## Run

```bash
oo connector run "netlify" --action "create_site_deploy_from_zip_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Netlify state. Confirm the exact payload and intended effect with the user before running.
