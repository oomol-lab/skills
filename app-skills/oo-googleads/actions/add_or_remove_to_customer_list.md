# Google Ads · `add_or_remove_to_customer_list`

Submit Customer Match user identifiers to add users to or remove users from a Google Ads customer list.

- **Service**: `googleads`
- **Action**: `add_or_remove_to_customer_list`
- **Action id**: `googleads.add_or_remove_to_customer_list`
- **Required scopes**: googleads.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "add_or_remove_to_customer_list"
```

## Run

```bash
oo connector run "googleads" --action "add_or_remove_to_customer_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Ads data. Always confirm the target and get explicit user approval before running.
