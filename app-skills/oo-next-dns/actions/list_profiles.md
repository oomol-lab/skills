# NextDNS · `list_profiles`

List NextDNS profiles available to the authenticated account.

- **Service**: `next_dns`
- **Action**: `list_profiles`
- **Action id**: `next_dns.list_profiles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "next_dns" --action "list_profiles"
```

## Run

```bash
oo connector run "next_dns" --action "list_profiles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
