# WooCommerce · `upload_media`

Upload one media file to the WordPress media library used by WooCommerce.

- **Service**: `woocommerce`
- **Action**: `upload_media`
- **Action id**: `woocommerce.upload_media`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "woocommerce" --action "upload_media"
```

## Run

```bash
oo connector run "woocommerce" --action "upload_media" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes WooCommerce state. Confirm the exact payload and intended effect with the user before running.
