# Postman · `get_an_api_version`

Tool to get information about a specific API version in Postman. Use when you need to retrieve details about a particular version of an API. Returns version details including ID, name, creation date, and associated schemas.

- **Service**: `postman`
- **Action**: `get_an_api_version`
- **Action id**: `postman.get_an_api_version`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_an_api_version"
```

## Run

```bash
oo connector run "postman" --action "get_an_api_version" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
