# Have I Been Pwned · `list_pastes_for_account`

List paste exposures for an email address from Have I Been Pwned.

- **Service**: `haveibeenpwned`
- **Action**: `list_pastes_for_account`
- **Action id**: `haveibeenpwned.list_pastes_for_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "haveibeenpwned" --action "list_pastes_for_account"
```

## Run

```bash
oo connector run "haveibeenpwned" --action "list_pastes_for_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
