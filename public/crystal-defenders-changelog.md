## [1.1.0] - 2023-07-10

This is a QoL patch with a couple small new features.

### Added
- A video player to the tavern, for those who want to chill but not throw lil' guys
- A showcase frame for the current highscore holder (send pics in my discord if you do better)

### Fixes
- DPS dummy spawn is moved to the far side of the couch. It shouldn't get shot by fire towers anymore while just chilling.
- Players leaving who have yeetlets no longer cause the instance owner's yeetlets to glitch out
- Fixed a broken script that was causing patreon names to not update last week (oof, sorry)
- Avatars without humanoid armature (I'm looking at you, guy who is literally a single triangle) no longer break stuff
   - They can throw things correctly
   - They don't teleport yeetlets to the shadow realm when they wear them and then DC
   - Pickups (and monsters) no longer dissapear when they hold them
   - Canvasses and NPCs actually look at them correctly

### Changed
- Optimized the scene hierarchy, yielding somewhere between 5-15 FPS depending on the circumstances
- Changed the way SFX volume is propagated, should be more stable and less CPU / memory intensive
- Ripped apart the SoundEffectManager and now it does way less work in general

## [1.0.4] - 2023-06-25

This patch is mostly aiming to fix some issues that are pretty hard to replicate consistently. As such I hope they're sorted but am not 100% sure. Bug reports in my discord appreciated!

### Added
- You can now see what "version" of the world you're in. Helpful for telling me about bugs, also if I ship an update you can be sure you're on it! :)
- Enabled avatar scaling (might make custom limits on it later)

### Fixes
- Fixed master display text on the gameplay menu
- (Hopefully) fix issues with double-buying yeetlets.
- (Hopefully) fix issues with keys not always disappearing when used.
- (Hopefully) fix issues with ownership-changes or player join / leaves in the middle of waves putting monsters in a state of undeath

### Changes
- player UI now defaults to "static world" positioning on quest, since that seems to have a measurable impact on performance. You can still set it back if you want.

## [1.0.3] - 2023-06-20

### Fixes
- Fix traps (still) not being sellable after the change in 1.0.1

## [1.0.2] - 2023-06-20

### Fixes
- Fix traps not being upgradable after the change in 1.0.1

## [1.0.1] - 2023-06-19

### Quality of Life Changes
-  Selling, Upgrading, and Heal pickups can no longer effect something you can't see. This should make it harder to accidentally upgrade or sell something by dropping the object while looking away.

### Fixes
- Keys should always spawn correctly when a boss is defeated
- Bats should no longer take divergent paths or get stuck in the wall in waves 20-30

## [1.0.0] - 2023-06-17

### Release
- After a year of development we finally released the world! Our launch features include:
  - 50 hand-made waves to clear
  - 5 powerful bosses to overcome
  - 5 types of traps to place
  - 16 types of towers, each with their own interactive mechanics
  - 1 terrifying Reaper, who must be avoided
  - Wieldable sword, spear, hammer, and shovel
  - 4 global upgrades to unlock
  - Excellent voice acting from ReinhardtVR
  - Endless NewGame+ difficulty increases
  - Score boards, spectator view, minimaps, and more
