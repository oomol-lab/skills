# IPinfo · `batch_lookup`

Look up multiple IPinfo legacy or Lite-compatible paths in a single batch request through the legacy batch endpoint.

- **Service**: `ipinfo_io`
- **Action**: `batch_lookup`
- **Action id**: `ipinfo_io.batch_lookup`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "batch_lookup"
```

## Run

```bash
oo connector run "ipinfo_io" --action "batch_lookup" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
