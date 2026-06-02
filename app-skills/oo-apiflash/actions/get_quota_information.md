# ApiFlash · `get_quota_information`

Retrieve the current ApiFlash screenshot quota and reset time.

- **Service**: `apiflash`
- **Action**: `get_quota_information`
- **Action id**: `apiflash.get_quota_information`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apiflash" --action "get_quota_information"
```

## Run

```bash
oo connector run "apiflash" --action "get_quota_information" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
