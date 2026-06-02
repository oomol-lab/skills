# Baidu Qianfan · `run_paddleocr_vl`

Run the Baidu Qianfan PaddleOCR-VL endpoint on a document or image.

- **Service**: `qianfan`
- **Action**: `run_paddleocr_vl`
- **Action id**: `qianfan.run_paddleocr_vl`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "run_paddleocr_vl"
```

## Run

```bash
oo connector run "qianfan" --action "run_paddleocr_vl" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
