# IPinfo · `batch_lite_lookup`

Look up multiple Lite API IPs or field paths in a single batch request.

- **Service**: `ipinfo_io`
- **Action**: `batch_lite_lookup`
- **Action id**: `ipinfo_io.batch_lite_lookup`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "batch_lite_lookup"
```

## Run

```bash
oo connector run "ipinfo_io" --action "batch_lite_lookup" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
