# Netlify · `lock_deploy`

Lock one Netlify deploy by deploy ID.

- **Service**: `netlify`
- **Action**: `lock_deploy`
- **Action id**: `netlify.lock_deploy`
- **Required scopes**: netlify.deploy.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "netlify" --action "lock_deploy"
```

## Run

```bash
oo connector run "netlify" --action "lock_deploy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
