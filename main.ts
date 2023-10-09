namespace SpriteKind {
    export const enemyYoko = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . . e e e f e 2 b f f f d c . 
        . . e e 2 2 d f 2 1 1 1 1 b c . 
        . . e e 2 2 d f e e c c c . . . 
        . . b 1 1 d e 2 e e c . . . . . 
        . . f f f f d d f . . . . . . . 
        f f f f f f d d . . . . . . . . 
        f f f . f f f e . . . . . . . . 
        f f . . . . e e e . . . . . . . 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 e . . . . 
        . . . . . 2 2 2 2 d 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 2 2 e . . . 
        . . . . e 2 2 2 2 2 e f f c c . 
        . . . . e e 2 2 e f f f f b c . 
        . . e e e f e 2 2 b f f f d c . 
        . e e 2 2 d f e 2 1 1 1 1 b c . 
        . e e 2 2 d f e e e c c c . . . 
        . b 1 1 e e 2 2 e e c . . . . . 
        . . f d d 2 2 2 f f f d d . . . 
        e e f d d e e e . f f d d . . . 
        e e e f f f f f . . . . . . . . 
        e e . . . . f f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 e . . . 
        . . . . . . 2 2 2 2 d 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 e f f c c 
        . . . . . e e 2 2 e f f f f b c 
        . . . e e e f e 2 2 b f f f d c 
        . . e e 2 2 d f e 2 1 1 1 1 b c 
        . . e e 2 2 d f e e e c c c . . 
        . . b 1 1 d e 2 2 e e c . . . . 
        . . . f f f d d 2 2 f d d . . . 
        . . . . f f d d e e f d d . . . 
        . . . . . f f f f f . . . . . . 
        . . . . e e e f f . . . . . . . 
        . . . . e e e e f f . . . . . . 
        `],
    100,
    true
    )
    playerRight = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyYoko, function (sprite, otherSprite) {
    gameOver()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    gameOver()
})
function hit (point: number, mySpriteA: Sprite, mySpriteB: Sprite) {
    info.changeScoreBy(100)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    sprites.destroy(mySpriteA)
    sprites.destroy(mySpriteB, effects.fire, 500)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . e 2 2 2 2 2 . . . . 
        . . . . . e 2 2 d 2 2 2 2 . . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . . . e 2 2 2 2 2 2 2 e . . 
        . . . c c f f e 2 2 2 2 2 e . . 
        . . . c b f f f f e 2 2 e e . . 
        . . . c d f f f b 2 e f e e e . 
        . . . c b 1 1 1 1 2 f d 2 2 e e 
        . . . . . c c c e e f d 2 2 e e 
        . . . . . . c e e 2 2 e d 1 1 b 
        . . . . . . . e 2 2 2 2 e f f . 
        . . . . d d f f 2 2 d d f f . . 
        . . . . d d f f e e d d f f . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . f f f e e e . . 
        . . . . . . . f f f e e e e . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 . . . . . . 
        . . . e 2 2 d 2 2 2 2 . . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . c c f f e 2 2 2 2 2 e . . . . 
        . c b f f f f e 2 2 e e . . . . 
        . c d f f f b 2 e f e e e . . . 
        . c b 1 1 1 1 2 f d 2 2 e e . . 
        . . . c c c e e f d 2 2 e e . . 
        . . . . . c e e 2 e d 1 1 b . . 
        . . . . . . . f d d f f f f . . 
        . . . . . . . . d d f f f f f f 
        . . . . . . . . e f f f . f f f 
        . . . . . . . e e e . . . . f f 
        . . . . . . e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 . . . . . . 
        . . . e 2 2 d 2 2 2 2 . . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . c c f f e 2 2 2 2 2 e . . . . 
        . c b f f f f e 2 2 e e . . . . 
        . c d f f f b 2 2 e f e e e . . 
        . c b 1 1 1 1 2 e f d 2 2 e e . 
        . . . c c c e e e f d 2 2 e e . 
        . . . . . c e e 2 2 e e 1 1 b . 
        . . . d d f f f 2 2 2 d d f . . 
        . . . d d f f . e e e d d f e e 
        . . . . . . . . f f f f f e e e 
        . . . . . . . f f f . . . . e e 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . e 2 2 2 2 2 . . . . . . . 
        . . e 2 2 d 2 2 2 2 . . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        c c f f e 2 2 2 2 2 e . . . . . 
        c b f f f f e 2 2 e e . . . . . 
        c d f f f b 2 2 e f e e e . . . 
        c b 1 1 1 1 2 e f d 2 2 e e . . 
        . . c c c e e e f d 2 2 e e . . 
        . . . . c e e 2 2 e d 1 1 b . . 
        . . . d d f 2 2 d d f f f . . . 
        . . . d d f e e d d f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f e e e . . . . 
        . . . . . . f f e e e e . . . . 
        `],
    100,
    true
    )
    playerRight = 0
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    pushA = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    gameOver()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . e 2 2 2 2 2 . . . . . . 
        . . . e 2 2 d 2 2 2 2 . . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . . . e 2 2 2 2 2 2 2 e . . . . 
        . c c f f e 2 2 2 2 2 e . . . . 
        . c b f f f f e 2 2 e e . . . . 
        . c d f f f b 2 2 e f e e e . . 
        . c b 1 1 1 1 2 e f d 2 2 e e . 
        . . . c c c e e e f d 2 2 e e . 
        . . . . . c e e 2 2 e e 1 1 b . 
        . . . d d f f f 2 2 2 d d f . . 
        . . . d d f f . e e e d d f e e 
        . . . . . . . . f f f f f e e e 
        . . . . . . . f f f . . . . e e 
        . . . . . . f f f f . . . . . . 
        `)
})
function gameOver () {
    if (muteki == 0) {
        finish += 1
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    if (playerRight == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 24)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 24)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemyYoko, function (sprite, otherSprite) {
    hit(100, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    hit(200, sprite, otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    gameOver()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // 空中でAボタン押した数
    if (jumpN == 0) {
        mySprite.vy += -150
    } else {
        if (jumpN == 1) {
            if (0 > mySprite.vy) {
                mySprite.vy += -100
            } else {
                mySprite.vy = 0
                mySprite.vy += -90
            }
        }
    }
    jumpN += 1
    pushA = 1
})
let enemyY = 0
let enemyX = 0
let projectile: Sprite = null
let finish = 0
let pushA = 0
let playerRight = 0
let temporary: Sprite = null
let jumpN = 0
let mySprite: Sprite = null
let muteki = 0
muteki = 0
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`レベル2`)
let mapWidth = tiles.tilemapColumns() * tiles.tileWidth()
console.logValue("width", mapWidth)
mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(51, 14)
controller.moveSprite(mySprite, 50, 0)
let xScroll = scene.screenWidth() / 3
jumpN = 1
for (let value of tiles.getTilesByType(sprites.swamp.swampTile3)) {
    temporary = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.enemyYoko)
    tiles.placeOnTile(temporary, value)
    temporary.setVelocity(-50, 0)
}
for (let value of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
    temporary = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.setTileAt(value, assets.tile`transparency16`)
    tiles.placeOnTile(temporary, value)
    temporary.setBounceOnWall(true)
    temporary.setVelocity(0, 53)
}
forever(function () {
    for (let value3 of sprites.allOfKind(SpriteKind.enemyYoko)) {
        enemyX = Math.trunc(value3.x / 16)
        enemyY = Math.trunc(value3.y / 16)
        if (value3.vx < 0) {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(enemyX - 1, enemyY + 1))) {
                value3.setVelocity(-50, 0)
            } else {
                value3.setVelocity(50, 0)
            }
        } else {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(enemyX + 1, enemyY + 1))) {
                value3.setVelocity(50, 0)
            } else {
                value3.setVelocity(-50, 0)
            }
        }
    }
})
forever(function () {
    // 重力
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jumpN = 0
    } else {
        mySprite.vy += 5
    }
    if (jumpN < 3) {
        if (pushA == 1) {
            mySprite.vy += -1
        } else {
            mySprite.vy += 5
        }
    } else {
        mySprite.vy += 50
    }
})
game.onUpdateInterval(100, function () {
    if (xScroll < mapWidth - scene.screenWidth() / 2) {
        xScroll += 1
    }
    if (mySprite.x < xScroll - scene.screenWidth() / 1.2) {
        game.gameOver(false)
    }
    scene.centerCameraAt(Math.max(xScroll, mySprite.x), mySprite.y + scene.screenHeight() / 4)
    if (finish > 10) {
        game.gameOver(false)
    }
})
