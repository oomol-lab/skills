# Baidu Qianfan · `run_pp_structure_v3`

Run the Baidu Qianfan PP-StructureV3 OCR endpoint on a document or image.

- **Service**: `qianfan`
- **Action**: `run_pp_structure_v3`
- **Action id**: `qianfan.run_pp_structure_v3`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "qianfan" --action "run_pp_structure_v3"
```

## Run

```bash
oo connector run "qianfan" --action "run_pp_structure_v3" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
