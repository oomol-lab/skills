# Mixpanel · `list_funnels`

List saved funnels available in a Mixpanel project.

- **Service**: `mixpanel`
- **Action**: `list_funnels`
- **Action id**: `mixpanel.list_funnels`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mixpanel" --action "list_funnels"
```

## Run

```bash
oo connector run "mixpanel" --action "list_funnels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
