# infinity-progress

## Description
infinity-progress is a lightweight and modern NUI progress bar for RedM/FiveM. It allows you to easily display a customizable progress bar to players, with optional text, duration, and image. Designed to be plug-and-play, it works with both client and server scripts via exports or events.

## Features
- Clean and modern NUI progress bar
- Customizable text, duration, and optional image
- Easy-to-use exports for both client and server
- Can be triggered via events or commands
- No dependencies required
- Optimized for performance

## Requirements
- RedM or FiveM server

## Installation
1. Download or clone this repository into your server's resources folder.
2. Add `ensure infinity-progress` to your `server.cfg`.

## Usage
- Use the provided exports or events to show a progress bar to any player.
- Test in-game with the `/pc` (client) and `/ps` (server) commands.

### Client Export
```lua
exports['infinity-progress']:progressbar('Progress text', time_in_ms, function(success)
    if success then
        -- do something
    end
end, 'url_or_path_to_image.png')
```
- `Progress text`: Text displayed on the bar.
- `time_in_ms`: Duration in milliseconds (e.g., 5000 for 5 seconds).
- `function(success)`: Callback called when finished.
- `'url_or_path_to_image.png'`: (Optional) Path or URL to the image to display.


### Client Event
```lua
TriggerEvent('infinity-progress:show', 'Progress text', time_in_ms, 'image.png')
```

## Configuration
No configuration needed. The resource is ready to use out of the box.

## Commands
- `/pc` — Test the progress bar export on the client.

## Credits
Developed by BzkDev Scripts. Inspired by the progress bar from `infinity-oil-delivery`.

## Version
- Standalone NUI progress bar
- Client and server exports
- Example test commands

## Dependencies
None

## Starting the resource
Add the following to your server.cfg file:
```
ensure infinity-progress
```

## Discord
- Infinity Core: [https://discord.gg/vut2YAEG2C](https://discord.gg/vut2YAEG2C)
- BZK Scripts: [https://discord.gg/zHpuu3ENTR](https://discord.gg/zHpuu3ENTR)

---
Questions or suggestions? Open an issue or contact us! 
