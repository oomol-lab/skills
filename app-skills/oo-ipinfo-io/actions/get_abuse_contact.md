# IPinfo · `get_abuse_contact`

Retrieve abuse contact data for a specific IP address when the token includes that dataset.

- **Service**: `ipinfo_io`
- **Action**: `get_abuse_contact`
- **Action id**: `ipinfo_io.get_abuse_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ipinfo_io" --action "get_abuse_contact"
```

## Run

```bash
oo connector run "ipinfo_io" --action "get_abuse_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
