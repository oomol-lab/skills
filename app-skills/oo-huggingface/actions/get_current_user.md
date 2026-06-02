# Hugging Face · `get_current_user`

Get the current authenticated Hugging Face user profile.

- **Service**: `huggingface`
- **Action**: `get_current_user`
- **Action id**: `huggingface.get_current_user`
- **Required scopes**: huggingface.account.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "huggingface" --action "get_current_user"
```

## Run

```bash
oo connector run "huggingface" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
