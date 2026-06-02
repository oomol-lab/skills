# Postman · `get_service_provider_configuration`

Tool to get Postman's SCIM API service provider configuration information. Use when you need to discover supported SCIM operations, capabilities, and authentication schemes. This endpoint returns configuration details including support for PATCH, bulk operations, filtering, sorting, and ETag handling.

- **Service**: `postman`
- **Action**: `get_service_provider_configuration`
- **Action id**: `postman.get_service_provider_configuration`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_service_provider_configuration"
```

## Run

```bash
oo connector run "postman" --action "get_service_provider_configuration" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
