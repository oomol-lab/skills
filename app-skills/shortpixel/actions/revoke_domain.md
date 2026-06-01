# ShortPixel · `revoke_domain`

Remove the current ShortPixel account association from a domain.

- **Service**: `shortpixel`
- **Action**: `revoke_domain`
- **Action id**: `shortpixel.revoke_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortpixel" --action "revoke_domain"
```

## Run

```bash
oo connector run "shortpixel" --action "revoke_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites ShortPixel data. Always confirm the target and get explicit user approval before running.
