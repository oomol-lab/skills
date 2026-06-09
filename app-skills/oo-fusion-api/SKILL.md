---
name: oo-fusion-api
description: "OOMOL Fusion API (oomol.com). Use this skill for ANY OOMOL Fusion API request — reading, creating, updating, and deleting data. Whenever a task involves OOMOL Fusion API, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "OOMOL Fusion API"
  author: "OOMOL"
  version: "1.0.2"
  service: "fusion-api"
  categories: "AI, Developer Tools"
  homepage: "https://www.oomol.com"
  icon: "https://static.oomol.com/logo/logo.png"
---

# OOMOL Fusion API

Operate **OOMOL Fusion API** through your OOMOL-connected account. This skill calls the `fusion-api` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: AI, Developer Tools. Exposes 84 action(s).

## Running an action

OOMOL Fusion API needs no account connection. Assume the oo CLI is installed and signed in. **Do not run `oo auth login` proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "fusion-api" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "fusion-api" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`cosyvoice_tts_generate`](actions/cosyvoice_tts_generate.md) — Generate speech audio with CosyVoice TTS.
- [`cphone_nano_banana_result`](actions/cphone_nano_banana_result.md) — Get cphone-nano-banana task result
- [`cphone_nano_banana_state`](actions/cphone_nano_banana_state.md) — Get cphone-nano-banana task state
- [`cphone_nano_banana_submit`](actions/cphone_nano_banana_submit.md) — Edit images with Nano Banana
- [`deepseek_ocr_recognize`](actions/deepseek_ocr_recognize.md) — Recognize text from a single image.
- [`doubao_stt_result`](actions/doubao_stt_result.md) — Get doubao-stt task result
- [`doubao_stt_state`](actions/doubao_stt_state.md) — Get doubao-stt task state
- [`doubao_stt_submit`](actions/doubao_stt_submit.md) — Convert speech to text with Doubao
- [`doubao_text_to_image_seedream_generate`](actions/doubao_text_to_image_seedream_generate.md) — Generate images from text with Doubao Seedream
- [`doubao_tts_result`](actions/doubao_tts_result.md) — Get doubao-tts task result
- [`doubao_tts_state`](actions/doubao_tts_state.md) — Get doubao-tts task state
- [`doubao_tts_submit`](actions/doubao_tts_submit.md) — Convert text to speech with Doubao
- [`fal_aura_sr_result`](actions/fal_aura_sr_result.md) — Get fal-aura-sr task result
- [`fal_aura_sr_state`](actions/fal_aura_sr_state.md) — Get fal-aura-sr task state
- [`fal_aura_sr_submit`](actions/fal_aura_sr_submit.md) — Image super-resolution upscaling
- [`fal_nano_banana_2_result`](actions/fal_nano_banana_2_result.md) — Get fal-nano-banana-2 task result
- [`fal_nano_banana_2_state`](actions/fal_nano_banana_2_state.md) — Get fal-nano-banana-2 task state
- [`fal_nano_banana_2_submit`](actions/fal_nano_banana_2_submit.md) — Generate or edit images with Nano Banana 2
- [`fal_nano_banana_pro_result`](actions/fal_nano_banana_pro_result.md) — Get fal-nano-banana-pro task result
- [`fal_nano_banana_pro_state`](actions/fal_nano_banana_pro_state.md) — Get fal-nano-banana-pro task state
- [`fal_nano_banana_pro_submit`](actions/fal_nano_banana_pro_submit.md) — Edit images with Nano Banana Pro
- [`fal_nano_banana_result`](actions/fal_nano_banana_result.md) — Get fal-nano-banana task result
- [`fal_nano_banana_state`](actions/fal_nano_banana_state.md) — Get fal-nano-banana task state
- [`fal_nano_banana_submit`](actions/fal_nano_banana_submit.md) — Edit images with Nano Banana
- [`fal_remove_background_result`](actions/fal_remove_background_result.md) — Image with background removed
- [`fal_remove_background_state`](actions/fal_remove_background_state.md) — Get fal-remove-background task state
- [`fal_remove_background_submit`](actions/fal_remove_background_submit.md) — Remove image backgrounds with the Fal.ai BRIA model
- [`file_upload_abort_multipart_upload`](actions/file_upload_abort_multipart_upload.md) — Abort multipart upload
- [`file_upload_complete_multipart_upload`](actions/file_upload_complete_multipart_upload.md) — Complete multipart upload
- [`file_upload_create_multipart_upload`](actions/file_upload_create_multipart_upload.md) — Initialize multipart upload
- [`file_upload_generate_presigned_url`](actions/file_upload_generate_presigned_url.md) — Generate a presigned URL for file upload
- [`file_upload_generate_presigned_urls`](actions/file_upload_generate_presigned_urls.md) — Generate a presigned URL for multipart upload parts
- [`jina_reader_read`](actions/jina_reader_read.md) — Read and extract URL content
- [`jina_reader_search`](actions/jina_reader_search.md) — Search web content
- [`oomol_tts_ng_generate`](actions/oomol_tts_ng_generate.md) — Generate speech audio
- [`oomol_tts_result`](actions/oomol_tts_result.md) — Get oomol-tts task result
- [`oomol_tts_state`](actions/oomol_tts_state.md) — Get oomol-tts task state
- [`oomol_tts_submit`](actions/oomol_tts_submit.md) — Convert text to audio
- [`openai_image_async_result`](actions/openai_image_async_result.md) — Get asynchronous OpenAI image generation result
- [`openai_image_async_submit`](actions/openai_image_async_submit.md) — Submit asynchronous OpenAI image generation requests, including gpt-image-2 image creation.
- [`openai_image_edit_async_result`](actions/openai_image_edit_async_result.md) — Get asynchronous OpenAI image edit result
- [`openai_image_edit_async_submit`](actions/openai_image_edit_async_submit.md) — Submit asynchronous OpenAI image edit requests, including gpt-image-2 image editing.
- [`pdf_transform_epub_result`](actions/pdf_transform_epub_result.md) — Get pdf-transform-epub task result
- [`pdf_transform_epub_state`](actions/pdf_transform_epub_state.md) — Get pdf-transform-epub task state
- [`pdf_transform_epub_submit`](actions/pdf_transform_epub_submit.md) — Convert a PDF to EPUB format
- [`pdf_transform_markdown_result`](actions/pdf_transform_markdown_result.md) — Get pdf-transform-markdown task result
- [`pdf_transform_markdown_state`](actions/pdf_transform_markdown_state.md) — Get pdf-transform-markdown task state
- [`pdf_transform_markdown_submit`](actions/pdf_transform_markdown_submit.md) — Convert a PDF to Markdown format
- [`qwen_asr_filetrans_result`](actions/qwen_asr_filetrans_result.md) — Get Qwen ASR file transcription task result
- [`qwen_asr_filetrans_state`](actions/qwen_asr_filetrans_state.md) — Get Qwen ASR file transcription task state
- [`qwen_asr_filetrans_submit`](actions/qwen_asr_filetrans_submit.md) — Submit a long-audio speech recognition task with Qwen ASR file transcription
- [`qwen_doc_turbo_analyze`](actions/qwen_doc_turbo_analyze.md) — Analyze documents with Tongyi Qianwen
- [`qwen_image_edit_plus_edit`](actions/qwen_image_edit_plus_edit.md) — Edit images with Tongyi Wanxiang
- [`qwen_image_generate`](actions/qwen_image_generate.md) — Generate images with Tongyi Qianwen
- [`qwen_mt_image_result`](actions/qwen_mt_image_result.md) — Get qwen-mt-image task result
- [`qwen_mt_image_state`](actions/qwen_mt_image_state.md) — Get qwen-mt-image task state
- [`qwen_mt_image_submit`](actions/qwen_mt_image_submit.md) — Image machine translation
- [`qwen_tts_generate`](actions/qwen_tts_generate.md) — Generate speech audio
- [`qwen_voice_cloning_create`](actions/qwen_voice_cloning_create.md) — Create a Qwen voice cloning voice and return a preview audio URL.
- [`qwen_voice_design_create`](actions/qwen_voice_design_create.md) — Create a Qwen voice design voice and return preview audio.
- [`qwen_voice_design_delete`](actions/qwen_voice_design_delete.md) — Delete a Qwen voice design voice.
- [`qwen_voice_design_generate`](actions/qwen_voice_design_generate.md) — Generate speech audio using a Qwen voice design voice.
- [`qwen_voice_design_list`](actions/qwen_voice_design_list.md) — List Qwen voice design voices.
- [`qwen_voice_design_query`](actions/qwen_voice_design_query.md) — Get details for a Qwen voice design voice.
- [`seedance_video_result`](actions/seedance_video_result.md) — Query a Seedance video generation task result
- [`seedance_video_state`](actions/seedance_video_state.md) — Get a Seedance video generation task state
- [`seedance_video_submit`](actions/seedance_video_submit.md) — Generate videos with Doubao Seedance
- [`text_to_epub_illustrate_generate`](actions/text_to_epub_illustrate_generate.md) — Generate illustrations for EPUB content
- [`tinify_png_shrink_compress`](actions/tinify_png_shrink_compress.md) — Compress PNG images with the Tinify API
- [`wanx_i2v_video_result`](actions/wanx_i2v_video_result.md) — Query first-frame-to-video task result
- [`wanx_i2v_video_state`](actions/wanx_i2v_video_state.md) — Get wanx-i2v-video task state
- [`wanx_i2v_video_submit`](actions/wanx_i2v_video_submit.md) — Generate videos from the first frame with Tongyi Wanxiang
- [`wanx_image_result`](actions/wanx_image_result.md) — Get wanx-image task result
- [`wanx_image_state`](actions/wanx_image_state.md) — Get wanx-image task state
- [`wanx_image_submit`](actions/wanx_image_submit.md) — Generate and edit images with Tongyi Wanxiang AI
- [`wanx_kf2v_video_result`](actions/wanx_kf2v_video_result.md) — Get wanx-kf2v-video task result
- [`wanx_kf2v_video_state`](actions/wanx_kf2v_video_state.md) — Get wanx-kf2v-video task state
- [`wanx_kf2v_video_submit`](actions/wanx_kf2v_video_submit.md) — Generate videos from keyframes with Tongyi Wanxiang
- [`wanx_r2v_video_result`](actions/wanx_r2v_video_result.md) — Query reference-to-video task result
- [`wanx_r2v_video_state`](actions/wanx_r2v_video_state.md) — Get wanx-r2v-video task state
- [`wanx_r2v_video_submit`](actions/wanx_r2v_video_submit.md) — Generate videos from reference assets with Tongyi Wanxiang
- [`wanx_t2v_video_result`](actions/wanx_t2v_video_result.md) — Query text-to-video task result
- [`wanx_t2v_video_state`](actions/wanx_t2v_video_state.md) — Get wanx-t2v-video task state
- [`wanx_t2v_video_submit`](actions/wanx_t2v_video_submit.md) — Generate text-to-video videos with Tongyi Wanxiang

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change OOMOL Fusion API state — confirm the exact payload and effect with the user before running.**
- **Delete or remove actions are destructive — always confirm the target and get explicit approval first.**

## First-time setup

These are **one-time** steps — do not repeat them on every call. Run a step only when a command fails for the matching reason.

- **`oo: command not found`** — install the oo CLI (other platforms: <https://cli.oomol.com/install-guide.md>):

  ```bash
  curl -fsSL https://cli.oomol.com/install.sh | bash    # macOS / Linux
  ```

  ```powershell
  irm https://cli.oomol.com/install.ps1 | iex           # Windows PowerShell
  ```

- **Not signed in / authentication error** — sign in to your OOMOL account once:

  ```bash
  oo auth login
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- OOMOL Fusion API homepage: https://www.oomol.com
