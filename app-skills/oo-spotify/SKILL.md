---
name: oo-spotify
description: "Spotify (spotify.com). Use this skill for ANY Spotify request — reading, creating, updating, and deleting data. Whenever a task involves Spotify, use this skill instead of calling the API directly."
allowed-tools: [Bash(oo *)]
metadata:
  title: "Spotify"
  author: "OOMOL"
  version: "1.0.0"
  service: "spotify"
  categories: "Design & Media, Social"
  homepage: "https://spotify.com"
  icon: "https://static.oomol.com/logo/third-party/spotify.svg"
---

# Spotify

Operate **Spotify** through your OOMOL-connected account. This skill calls the `spotify` connector with the [oo CLI](https://github.com/oomol-lab/oo-cli); OOMOL injects credentials server-side, so you never handle raw tokens.

Category: Design & Media, Social. Exposes 88 action(s).

## Running an action

Assume the user has already installed the oo CLI, signed in, and connected Spotify. **Do not run `oo auth login` or open the connection URL proactively — just run the action.** Fall back to [First-time setup](#first-time-setup) only when a command actually fails with an auth or connection error.

**1. Inspect the contract** to get the authoritative input/output schema before building a payload:

```bash
oo connector schema "spotify" --action "<action_name>"
```

**2. Run the action** with a JSON payload that matches the input schema:

```bash
oo connector run "spotify" --action "<action_name>" --data '<json>' --json
```

- `--data` takes a JSON object string or `@path/to/file.json`; omit it to send `{}`.
- The response is `{ "data": ..., "meta": { "executionId": "..." } }`; the execution id lives under `meta.executionId`.

Each action below links to a reference file with its purpose and exact commands. Read the linked file, then fetch the live schema with `oo connector schema` before constructing `--data`.

## Available actions

- [`add_item_to_playback_queue`](actions/add_item_to_playback_queue.md) — Add a Spotify track or episode to the end of the playback queue.
- [`add_items_to_playlist`](actions/add_items_to_playlist.md) — Add tracks or episodes to a Spotify playlist in the requested order.
- [`change_playlist_details`](actions/change_playlist_details.md) — Update Spotify playlist metadata such as name, description, visibility, or collaborative state.
- [`check_saved_albums`](actions/check_saved_albums.md) — Check whether the current authenticated Spotify user has saved the given albums.
- [`check_saved_audiobooks`](actions/check_saved_audiobooks.md) — Check whether the current authenticated Spotify user has saved the given audiobooks.
- [`check_saved_episodes`](actions/check_saved_episodes.md) — Check whether the current authenticated Spotify user has saved the given episodes.
- [`check_saved_shows`](actions/check_saved_shows.md) — Check whether the current authenticated Spotify user has saved the given shows.
- [`check_saved_tracks`](actions/check_saved_tracks.md) — Check whether the current authenticated Spotify user has saved the given tracks.
- [`check_user_follows_artists_or_users`](actions/check_user_follows_artists_or_users.md) — Check whether the current authenticated Spotify user follows the given artists or users.
- [`check_users_follow_playlist`](actions/check_users_follow_playlist.md) — Check whether the given Spotify users follow a playlist.
- [`create_playlist`](actions/create_playlist.md) — Create a Spotify playlist for a user account owned by the authenticated user.
- [`follow_artists_or_users`](actions/follow_artists_or_users.md) — Follow one or more Spotify artists or users on behalf of the authenticated user.
- [`follow_playlist`](actions/follow_playlist.md) — Follow a Spotify playlist on behalf of the authenticated user.
- [`get_album`](actions/get_album.md) — Get a Spotify album by its album ID.
- [`get_album_tracks`](actions/get_album_tracks.md) — Get the tracks for a Spotify album by its album ID.
- [`get_artist`](actions/get_artist.md) — Get a Spotify artist by its artist ID.
- [`get_artist_albums`](actions/get_artist_albums.md) — Get Spotify albums for an artist by the artist ID.
- [`get_artist_related_artists`](actions/get_artist_related_artists.md) — Get related Spotify artists for an artist ID.
- [`get_artist_top_tracks`](actions/get_artist_top_tracks.md) — Get top Spotify tracks for an artist ID in a given market.
- [`get_audiobook`](actions/get_audiobook.md) — Get a Spotify audiobook by its audiobook ID.
- [`get_audiobook_chapters`](actions/get_audiobook_chapters.md) — Get Spotify chapters for an audiobook ID.
- [`get_available_devices`](actions/get_available_devices.md) — Get available Spotify playback devices for the current authenticated user.
- [`get_available_genre_seeds`](actions/get_available_genre_seeds.md) — Get the genre seeds supported by Spotify recommendations.
- [`get_available_markets`](actions/get_available_markets.md) — Get the markets supported by Spotify catalog APIs.
- [`get_browse_categories`](actions/get_browse_categories.md) — Get Spotify browse categories for a market and locale.
- [`get_browse_category`](actions/get_browse_category.md) — Get a Spotify browse category by category ID.
- [`get_category_playlists`](actions/get_category_playlists.md) — Get Spotify playlists for a browse category ID.
- [`get_chapter`](actions/get_chapter.md) — Get a Spotify chapter by its chapter ID.
- [`get_current_user_playlists`](actions/get_current_user_playlists.md) — Get playlists for the current authenticated Spotify user.
- [`get_current_user_profile`](actions/get_current_user_profile.md) — Get the current authenticated Spotify user's profile details.
- [`get_currently_playing_track`](actions/get_currently_playing_track.md) — Get the currently playing Spotify item for the authenticated user.
- [`get_episode`](actions/get_episode.md) — Get a Spotify episode by its episode ID.
- [`get_featured_playlists`](actions/get_featured_playlists.md) — Get Spotify featured playlists for a market and locale.
- [`get_followed_artists`](actions/get_followed_artists.md) — Get artists followed by the current authenticated Spotify user.
- [`get_new_releases`](actions/get_new_releases.md) — Get Spotify new release albums for a market.
- [`get_playback_state`](actions/get_playback_state.md) — Get the current Spotify playback state for the authenticated user.
- [`get_playlist`](actions/get_playlist.md) — Get metadata for a Spotify playlist by its playlist ID.
- [`get_playlist_cover_image`](actions/get_playlist_cover_image.md) — Get Spotify cover images for a playlist ID.
- [`get_playlist_items`](actions/get_playlist_items.md) — Get playlist items for a Spotify playlist by its playlist ID.
- [`get_recently_played_tracks`](actions/get_recently_played_tracks.md) — Get recently played Spotify tracks for the authenticated user.
- [`get_recommendations`](actions/get_recommendations.md) — Get Spotify track recommendations from seed artists, tracks, or genres.
- [`get_several_albums`](actions/get_several_albums.md) — Get multiple Spotify albums by album ID.
- [`get_several_artists`](actions/get_several_artists.md) — Get multiple Spotify artists by artist ID.
- [`get_several_audiobooks`](actions/get_several_audiobooks.md) — Get multiple Spotify audiobooks by audiobook ID.
- [`get_several_chapters`](actions/get_several_chapters.md) — Get multiple Spotify chapters by chapter ID.
- [`get_several_episodes`](actions/get_several_episodes.md) — Get multiple Spotify episodes by episode ID.
- [`get_several_shows`](actions/get_several_shows.md) — Get multiple Spotify shows by show ID.
- [`get_several_track_audio_features`](actions/get_several_track_audio_features.md) — Get Spotify audio features for multiple track IDs.
- [`get_several_tracks`](actions/get_several_tracks.md) — Get multiple Spotify tracks by track ID.
- [`get_show`](actions/get_show.md) — Get a Spotify show by its show ID.
- [`get_show_episodes`](actions/get_show_episodes.md) — Get Spotify episodes for a show ID.
- [`get_track`](actions/get_track.md) — Get a Spotify track by its track ID.
- [`get_track_audio_analysis`](actions/get_track_audio_analysis.md) — Get Spotify audio analysis for a track ID.
- [`get_track_audio_features`](actions/get_track_audio_features.md) — Get Spotify audio features for a track ID.
- [`get_user_playlists`](actions/get_user_playlists.md) — Get playlists visible for a Spotify user ID.
- [`get_user_profile`](actions/get_user_profile.md) — Get a Spotify user profile by Spotify user ID.
- [`get_user_queue`](actions/get_user_queue.md) — Get the current Spotify queue for the authenticated user.
- [`get_user_saved_albums`](actions/get_user_saved_albums.md) — Get albums saved by the current authenticated Spotify user.
- [`get_user_saved_audiobooks`](actions/get_user_saved_audiobooks.md) — Get audiobooks saved by the current authenticated Spotify user.
- [`get_user_saved_episodes`](actions/get_user_saved_episodes.md) — Get episodes saved by the current authenticated Spotify user.
- [`get_user_saved_shows`](actions/get_user_saved_shows.md) — Get shows saved by the current authenticated Spotify user.
- [`get_user_saved_tracks`](actions/get_user_saved_tracks.md) — Get tracks saved by the current authenticated Spotify user.
- [`get_user_top_artists`](actions/get_user_top_artists.md) — Get the current Spotify user's top artists for a selected affinity time range.
- [`get_user_top_tracks`](actions/get_user_top_tracks.md) — Get the current Spotify user's top tracks for a selected affinity time range.
- [`pause_playback`](actions/pause_playback.md) — Pause Spotify playback on the targeted device or current active device.
- [`remove_playlist_items`](actions/remove_playlist_items.md) — Remove tracks or episodes from a Spotify playlist.
- [`remove_user_s_saved_audiobooks`](actions/remove_user_s_saved_audiobooks.md) — Remove one or more Spotify audiobooks from the authenticated user's library.
- [`remove_user_s_saved_episodes`](actions/remove_user_s_saved_episodes.md) — Remove one or more Spotify episodes from the authenticated user's library.
- [`remove_user_s_saved_shows`](actions/remove_user_s_saved_shows.md) — Remove one or more Spotify shows from the authenticated user's library.
- [`remove_user_s_saved_tracks`](actions/remove_user_s_saved_tracks.md) — Remove one or more Spotify tracks from the authenticated user's library.
- [`remove_users_saved_albums`](actions/remove_users_saved_albums.md) — Remove one or more Spotify albums from the authenticated user's library.
- [`save_albums_for_current_user`](actions/save_albums_for_current_user.md) — Save one or more Spotify albums to the authenticated user's library.
- [`save_audiobooks_for_current_user`](actions/save_audiobooks_for_current_user.md) — Save one or more Spotify audiobooks to the authenticated user's library.
- [`save_episodes_for_current_user`](actions/save_episodes_for_current_user.md) — Save one or more Spotify episodes to the authenticated user's library.
- [`save_shows_for_current_user`](actions/save_shows_for_current_user.md) — Save one or more Spotify shows to the authenticated user's library.
- [`save_tracks_for_current_user`](actions/save_tracks_for_current_user.md) — Save one or more Spotify tracks to the authenticated user's library.
- [`search_items`](actions/search_items.md) — Search Spotify catalog content across one or more resource types with a keyword query.
- [`seek_to_position`](actions/seek_to_position.md) — Seek the currently playing Spotify item to the given playback position.
- [`set_playback_volume`](actions/set_playback_volume.md) — Set Spotify playback volume for the targeted playback device.
- [`set_repeat_mode`](actions/set_repeat_mode.md) — Set Spotify repeat mode for the targeted playback device.
- [`skip_to_next`](actions/skip_to_next.md) — Skip to the next item in the Spotify playback queue.
- [`skip_to_previous`](actions/skip_to_previous.md) — Skip to the previous item in the Spotify playback queue.
- [`start_resume_playback`](actions/start_resume_playback.md) — Start a new Spotify playback context or resume playback on the targeted device.
- [`toggle_playback_shuffle`](actions/toggle_playback_shuffle.md) — Enable or disable Spotify playback shuffle on the targeted device.
- [`transfer_playback`](actions/transfer_playback.md) — Transfer Spotify playback to another available device.
- [`unfollow_artists_or_users`](actions/unfollow_artists_or_users.md) — Unfollow one or more Spotify artists or users on behalf of the authenticated user.
- [`unfollow_playlist`](actions/unfollow_playlist.md) — Unfollow a Spotify playlist on behalf of the authenticated user.
- [`update_playlist_items`](actions/update_playlist_items.md) — Replace all items in a Spotify playlist or reorder an existing range of items.

## Safety

- Read actions (get / list / search) are safe to run directly.
- **Create, update, send, or post actions change Spotify state — confirm the exact payload and effect with the user before running.**
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

- **`scope_missing` / `credential_expired` / `app_not_ready` / `app_not_found`** — Spotify is not connected, or the connection expired or lacks a scope. Connect once (auth type: OAuth2) at:

  ```text
  https://console.oomol.com/app-connections?provider=spotify
  ```

- **HTTP 402 / `OOMOL_INSUFFICIENT_CREDIT`** — billing stop. Recharge at `https://console.oomol.com/billing/token-recharge` before retrying.

## Resources

- Spotify homepage: https://spotify.com
