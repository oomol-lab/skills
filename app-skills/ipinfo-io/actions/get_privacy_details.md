# IPinfo · `get_privacy_details`

Retrieve privacy detection flags for a specific IP address when the token includes privacy enrichment.

- **Service**: `ipinfo_io`
- **Action**: `get_privacy_details`
- **Action id**: `ipinfo_io.get_privacy_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_privacy_details"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_privacy_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
