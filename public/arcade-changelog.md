## [2.5.0] - 2023-11-21
This update includes a whole new game (sort of), since the Oh Torus boardgame is now fully automated. Other than that mostly quality of life fixes.

### Added
- A full rules engine for Oh Torus!
- All games show control prompts based on your platform (eg. mobile says to press use, desktop says to click, etc.)

### Fixed
- All games are now playable on Android (non-VR) VRChat
- Desktop players with rebound movement controls should be able to play the games using them
- Slap it should sync much better when passing between players
- Just Ask should no longer randomly desync when reshuffled

### Changed
- Reworked core Player Interaction system so that it uses your controller locations rather than hand bones
- Less intense haptics on quest
- Reduced audio source count
- Pillows upstairs have silly floaty friction physics instead of none at all
  
## [2.4.0] - 2023-06-06
I'm finally back to actually working on this project. Hurray! We're scrapping the idea of a separate PC only arcade, and I'm pulling in assets and ideas from there over time.

### Changed
- Upgraded to Udon 1.x so I can actually do stuff again
- Integrated remote text fetching for changelog, so they don't go stale
- Redid world UI and settings from scratch
- Touched up all the UI for poppin' buddies

### Added
- Fish! Aquarium! Neon Signs! Glasses! Wires! Wowee!

### Fixed
- A lot of fixes to network sync in the arcade games.
- No more janky aliased pixel edges, thanks to the magic of shaders.
- Haptics on bumblball work correctly

## [2.3.2] - 2022-04-20

### Fixed
- Fixed a bug where flopping fish was crashing when you got a 3rd point because it wanted to spawn an easter egg that no longer existed. (thanks for pointing that out badgirlrats 718a!)

## [2.3.1] - 2022-04-19

I decided to make this a patch even though it is technically "changing" things. Semver doesn't matter and the rules are a lie.

### Changed
- Easter stuff gone, no more that
- Remade the doors and windows
- Some text that eluded to the easter stuff removed form maru's mansion

### Added
- A discord ad because I shill myself now
- Some new ask questions
- Some new maru's mansion text

## [2.3.0] - 2022-04-10

### Added
- Easter stuff!
- "Just Ask", a simple social game
- New songs to the jukebox!
- A whole lot of features to maru's mansion

### Fixed
- Geometry and shader issues
- Otorus should break less often
- Otorus reset button should now always work correctly (and fix broken states)

## [2.2.0] - 2022-02-22

### Added
- Otorus reset button

### Fixed
- Not being able to start a game with click controls for bombardier
- Immobilization breaking for Pongue with VR Controllers

## [2.1.0] - 2022-02-03

### Added
- Toggleable gamepad controls for arcade joysticks
- Toggleable click controls for arcade buttons
- Otrio instructions
- Agender washroom sign

### Fixed
- Actually use  normal maps
- Fix some uv padding bugs
- Fix holes in walls

## [2.2.0] - 2022-01-30

### Added

- Controller sparkles
- Playable O-trio

## [2.0.0] - 2022-01-22

### Removed
- Balloons
- NYE banner

### Added
- A second room with a couch and a tv
- Poppin' Buddies: a game inspired by Puyo Pop
- Eatable cookies
- Usable controllers

## [1.1.0] - 2021-12-26

### Fixed
- Made this text area scroll

### Added
- Balloons!
- Colliders on roof and beams


## [1.0.2] - 2021-12-26

### Fixed

- Corner wall gaps plugged for real this time (previously the colliders were set to trigger for some reason)
- Fixed issues with bombadier breaking because of some strange stuff with player join order
- Tweaked colliders on south wall of bombadier cus sometimes you used to get stuck

### Fixed

## [1.0.1] - 2021-12-25

### Fixed

- Corner wall gaps plugged
- Pongue no longer breaks whenever someone scores due to missing assets
- Bombardier now correctly allows new players to drop bombs when all players go do other things in the middle of a session
- Weird scaling bugs in the positioning of the east wall's christmas lights no longer result in them rendering outside the world geometry 

### Added

- A new song, "Tell Me (Instrumental)", to the jukebox
- Bombadier now allows "late joiners" to join in during a game

## [1.0.0] - 2021-12-22

### Added

- Released cross-compatible world
- Added all 9 initial games and the jukebox
