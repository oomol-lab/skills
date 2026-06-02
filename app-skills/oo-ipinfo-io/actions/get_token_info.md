# IPinfo · `get_token_info`

Retrieve account and usage metadata for the current IPinfo token.

- **Service**: `ipinfo_io`
- **Action**: `get_token_info`
- **Action id**: `ipinfo_io.get_token_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_token_info"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_token_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
