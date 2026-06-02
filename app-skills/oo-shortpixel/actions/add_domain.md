# ShortPixel · `add_domain`

Add and associate a domain with the current ShortPixel account.

- **Service**: `shortpixel`
- **Action**: `add_domain`
- **Action id**: `shortpixel.add_domain`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "shortpixel" --action "add_domain"
```

## Run

```bash
oo connector run "shortpixel" --action "add_domain" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes ShortPixel state. Confirm the exact payload and intended effect with the user before running.
