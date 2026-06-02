# AddressZen · `retrieve_address_usa`

Retrieve a USA-formatted address from an AddressZen suggestion identifier and return the official response wrapper.

- **Service**: `addresszen`
- **Action**: `retrieve_address_usa`
- **Action id**: `addresszen.retrieve_address_usa`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "addresszen" --action "retrieve_address_usa"
```

## Run

```bash
oo connector run "addresszen" --action "retrieve_address_usa" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
