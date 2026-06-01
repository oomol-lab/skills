# Yelp · `get_business_details`

Get Yelp business details for one business identifier or alias.

- **Service**: `yelp`
- **Action**: `get_business_details`
- **Action id**: `yelp.get_business_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "yelp" --action "get_business_details"
```

## Run

```bash
oo connector run "yelp" --action "get_business_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
