enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const ship_ball = SpriteKind.create()
    export const 巨型敵人 = SpriteKind.create()
    export const 敵子彈 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    子彈 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 4 5 2 . . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 0, -100)
    music.pewPew.play()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    ship,
    [img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . d 1 1 d . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . 1 1 8 8 1 1 . . . . . 
        . . . . 1 d 1 1 1 1 d 1 . . . . 
        9 . . 1 d d 1 1 1 1 d d 1 . . 9 
        6 . 1 d d d 6 1 1 6 d d d 1 . 6 
        6 1 d d d d 6 1 1 6 d d d d 1 6 
        6 d b b b b c b b c b b b b d 6 
        . . . . 4 5 4 . . 4 5 4 . . . . 
        . . . . 2 4 2 . . 2 4 2 . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        `,img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . d 1 1 d . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . 1 1 8 8 1 1 . . . . . 
        . . . . 1 d 1 1 1 1 d 1 . . . . 
        9 . . 1 d d 1 1 1 1 d d 1 . . 9 
        6 . 1 d d d 6 1 1 6 d d d 1 . 6 
        6 1 d d d d 6 1 1 6 d d d d 1 6 
        6 d b b b b c b b c b b b b d 6 
        . . . . 2 4 2 . . 2 4 2 . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ship,
    [img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 d d . . . . . . 
        . . . . . . 8 8 1 1 . . . . . . 
        . . . . . . 8 8 1 d 1 . . . . . 
        . . . . . . 8 8 1 d 1 . . . . . 
        . . . . . b d 1 1 d d 1 . . . . 
        . . . 9 . b d 1 1 d d 1 . 9 . . 
        . . . 6 b d 1 1 6 d d d 1 6 . . 
        . . . 6 b 1 1 1 6 d d d d 6 . . 
        . . . 6 c b c b c b b b b 6 . . 
        . . . . . 2 4 2 4 2 . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 d d . . . . . . 
        . . . . . . 8 8 1 1 . . . . . . 
        . . . . . . 8 8 1 d 1 . . . . . 
        . . . . . . 8 8 1 d 1 . . . . . 
        . . . . . b d 1 1 d d 1 . . . . 
        . . . 9 . b d 1 1 d d 1 . 9 . . 
        . . . 6 b d 1 1 6 d d d 1 6 . . 
        . . . 6 b 1 1 1 6 d d d d 6 . . 
        . . . 6 c b c b c b b b b 6 . . 
        . . . . . 2 5 2 5 2 . . . . . . 
        . . . . . 2 4 2 4 2 . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    生命.destroy()
    info.changeLifeBy(1)
    music.playMelody("C D E G A C5 - - ", 800)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.敵子彈, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeLifeBy(-1)
    music.playMelody("G D - - - - - - ", 500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    子彈 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 4 5 2 . . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 0, 100)
    music.pewPew.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ship,
    [img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . d d 1 . . . . . . . 
        . . . . . . 1 1 8 8 . . . . . . 
        . . . . . 1 d 1 8 8 . . . . . . 
        . . . . . 1 d 1 8 8 . . . . . . 
        . . . . 1 d d 1 1 d b . . . . . 
        . . 9 . 1 d d 1 1 d b . 9 . . . 
        . . 6 1 d d d 6 1 1 d b 6 . . . 
        . . 6 d d d d 6 1 1 1 b 6 . . . 
        . . 6 b b b b c b c b c 6 . . . 
        . . . . . . 2 4 2 4 2 . . . . . 
        . . . . . . . 2 . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . d d 1 . . . . . . . 
        . . . . . . 1 1 8 8 . . . . . . 
        . . . . . 1 d 1 8 8 . . . . . . 
        . . . . . 1 d 1 8 8 . . . . . . 
        . . . . 1 d d 1 1 d b . . . . . 
        . . 9 . 1 d d 1 1 d b . 9 . . . 
        . . 6 1 d d d 6 1 1 d b 6 . . . 
        . . 6 d d d d 6 1 1 1 b 6 . . . 
        . . 6 b b b b c b c b c 6 . . . 
        . . . . . . 2 5 2 5 2 . . . . . 
        . . . . . . 2 4 2 4 2 . . . . . 
        . . . . . . . 2 . 2 . . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    ship,
    [img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . d 1 1 d . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . 1 1 8 8 1 1 . . . . . 
        . . . . 1 d 1 1 1 1 d 1 . . . . 
        9 . . 1 d d 1 1 1 1 d d 1 . . 9 
        6 . 1 d d d 6 1 1 6 d d d 1 . 6 
        6 1 d d d d 6 1 1 6 d d d d 1 6 
        6 d b b b b c b b c b b b b d 6 
        . . . . 4 5 4 . . 4 5 4 . . . . 
        . . . . 2 4 2 . . 2 4 2 . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        `,img`
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . d 1 1 d . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . . 1 8 8 1 . . . . . . 
        . . . . . 1 1 8 8 1 1 . . . . . 
        . . . . 1 d 1 1 1 1 d 1 . . . . 
        9 . . 1 d d 1 1 1 1 d d 1 . . 9 
        6 . 1 d d d 6 1 1 6 d d d 1 . 6 
        6 1 d d d d 6 1 1 6 d d d d 1 6 
        6 d b b b b c b b c b b b b d 6 
        . . . . 2 4 2 . . 2 4 2 . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.巨型敵人, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.setKind(SpriteKind.巨型敵人)
    otherSprite.z = 0
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeLifeBy(-1)
    music.playMelody("G D - - - - - - ", 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.巨型敵人, function (sprite, otherSprite) {
    otherSprite.z = otherSprite.z - 1
    otherSprite.startEffect(effects.fire, 200)
    sprite.destroy()
    if (otherSprite.z <= 0) {
        otherSprite.destroy(effects.disintegrate, 100)
        info.changeScoreBy(3)
        music.playMelody("G D - - - - - - ", 500)
        otherSprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
    info.changeScoreBy(1)
    music.playMelody("G D - - - - - - ", 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeLifeBy(-1)
    music.playMelody("G D - - - - - - ", 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.敵子彈, function (sprite, otherSprite) {
    sprite.destroy()
})
let 敵人: Sprite = null
let 敵人2: Sprite = null
let enemyOut = 0
let 敵子彈2: Sprite = null
let 巨型敵人2: Sprite = null
let 巨型敵人out = 0
let 生命: Sprite = null
let 子彈: Sprite = null
let ship: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffccccccfffffccccccccccccaaaaaaccccfffcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff5ffffffffffffffffcccaaaacccfccccfffffffaaaabbbbbbbbbaacfffcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffccaabbbbaaccfccfccccccfffaaaaababbbbbbbaacffcccaaccffccffffffffffffffff5ffffffffffffffffffffffcccccfffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffcaabbffffbbaacffccaaaacccffaaaaababbbbbbbbaacffcaaacccffccccfffffffffffffffffffffffffffffffffcccaaacfccffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffccabff2222ffbacccaabbbbaacccfcaaaaaabababbbbbaccfccaaacccffcccccffffffffffffffffffffffffffffcccfffccfcccccffffffffffffffffff
    ffffffffffffffffffffffffffffffcccccccabfe2244422fbacabbffffbbaaccfcacacaaaabababacaccfccaaaacccfccaaccffffffffffffffffffffffffffcffffffffaaaaccfffffffffffffffff
    ffffffffffffffffffffffffffffccaaaaccabfe224451422fbabff2222ffbaaccfcacacaaaaaabaaacaccfcccaaaaccfccaaaccffffffffffffff4fffffffffffffffffffcacfffffffffffffffffff
    fffffffffff4fffffffffffffffcaabbbbaaabf2244555442fbbfe2244422fbaccfacacacacaaaaaaaacaccfccccaaaccfcccaaaccfffffffffff414fffffffffffffffffffffaccffffffffffffffff
    ffffffffffffffffffffffffffcabbffffbbbfe22445544422ffe224451422fbacccccacacacaaaaaaaacccfccccaaaaccfcccaaaacfffffffffff4fffffffffffffffffffffaaaccfffffffffffffff
    fffffffffffffff9fffffffffcabff2222ffbfe22444444422ff2244555442fbaccccccccacacacaaaacacccfcccccaacccfccccacccffffffffffffffffffffffffffffffffcbaacfffffffffffffff
    fffffffffffffffffffffffffcbfe2244422ffe22244444222fe22445544422fccccccccccccacacaccccccffffccccccccffccccccfccfffffffffffffffffffffffffffffffbbaccffffffffffffff
    ffffffffffffffffffffffffcafe224451422fe2222444222efe22444444422ffffffffcccccccccccccccfccccffcfcfcfccffcfcfcccccffffffffffffffffffffffffffffffffccffffffffffffff
    ffffffffffffffffffffffffcbf2244555442ffe222222222ffe22244444222ffccccccfffcccccccccccffccccccfcfcfcccccfcffccaacccfccffffffffffffffffffffffffcccffffffffffffffff
    ffffffffffffffffffffffffcfe22445544422fee2222222effe2222444222efccccccccccffccccccfcfcffcaacccfcffccaaccfcfccaaaaccffccffffffffffffffffffffffaacccffffffffffffff
    ffffffffffffffffffffffffcfe22444444422ffeee222eefccfe222222222ffcccccacaccccffcfcfcfcfcfccaacccffcfcaaaccffffcaaaaaccfccccffffffffffffffffffcabaccffffffffffffff
    ffffffffffffffffffffffffcfe22244444222ffffeeeeffcccfee2222222effcccaacacaaccccfcfcfcffccfcaaacccfcfccaaaccfccfccaabaccffcacccfffffffffffffffabbaccffffffffffffff
    ffffffffffffffffffffffffcfe2222444222efcccffffcccfccfeee222eefffccccccaaaaaacccfcfcfcfcccfcabacccfcfccabbacfccffcabbbcccffaaacccfffffffffffffbaaccffffffffffffff
    ffffffffffffffffffffffffcffe222222222fccfccccccaaffccffeeeeffccfcccacccaabaaacccfcffffcacfccabacccfcffcabbacfffbfcaabacccfaabbccfccffffffcaccfacccffffffffffffff
    ffffffffffffffffffffffccccfee2222222efcffaaaaaaaaaaacccffffcccccffcaacccaabbaaccffbfbfcaccffcbbacccffbfcabaccfbfbfcaaccffffaabccfaaaacfcaabbccfccfffffffffffffff
    ffffffffffffffffffffccccccffeee222eefccaaaaaaaaaaaaaaacccccccccccfcacccccaabbacccffbffcaaccfcabaccccbfbfcaaaccfbfbfcacffcccfaacfabbbbafabbbaacfccfffffffffffffff
    fffffffffffffffffffccacaccfcffeeeeffccaaaaabababaaaaaaaacacacccccfccffccccabbaaccfbfbfcaaccffcaaacccfbfbfcaccfffbfbfccfcccccfacfaabbbafabaaacccfffffffffffffffff
    ffffffffffffffffffccacacccfcccffffcccaaaaababababaaaaaacacacfcccccffccfcccaabbaccffbffcaaccffcaaafffffbfbfcffcccfbfbfffccaaccfcfaaaaaacfaaaccccfffffffffffffffff
    fffff9fffffffffffccaaaccccfcccccccacacaaababbbbbabaaaaaaaacafccacccccfcacccabbacccffbfccccfbffccfccccffbfbfccccccfbfbffccabaccfccaaaaccfccccccfffffffff9ffffffff
    fffffffffffffffffcabaccccffccacacacacaaababfbfbfbabaaaaaaaffccacccffffaaaccabbaaccfbffcccfbfbfcfccccccffbffccaaaccfbfbffcabaccfccccccccfcccccfffffffffffffffffff
    ffffffffffffffffccabacacfccfccaccfaaaaaaabbfbfbfbbaaaaaaafcccccffffffcaccccabbaaccffbffffbfbfffccaacccffffffcabacccfffffccabaccfcccccccfcccfffffffffffffffffffff
    ffffffffffffffffcabbacaacffcffcccfccaaaabfbfbfbfbfbaaacccfffffffffffcaccffcabbaaccfffffffffffffcaaaaccffffffccabaccfffffccabaccfccccccffffffffffffffffffffffffff
    fffffffffffffffccabbacccacfffffffffccaaabfbfbfffffbaacffffffffffffffccffffcabbaaccfffffffffffffcabaaccfffffffcabaccffffffcabaccfffffffffffffffffffffffffffffffff
    fffffffffffffffccabbaccfccfffffffffffcaabffffffffbaacffffffffffffffffffffccabbaaccfffffffffffffcabaaccfffffffcabaccffffffcabaccfffffffffffffffffffffffffffffffff
    fffffffffffffffccabbaccffffffffff1ffffcaabfffffffbacfffffffffffffffffffffcaabaacccfffffff5fffffcabaccffffffffcabaccffffffcabaccfffffffffffffffffffffffffffffffff
    fffffffffffffffccabbaccffffffffffffffffcabfffffffaaffffffffffffffffffffffcabbaaccffffffffffffffcabaccffffffffcabaccffffffcabaccfffffffffffffffffffffffffffffffff
    fffffffffffffffccabbaccfffffffffffffffffaafffffffaafffffffffffffffccccffcaabaaaccfffffffffffffcabbaccffffffffcabacfffffffcabacffffffffffffffffffffffffffffffffff
    ffffffffffffffffccabaaccffcccfffffffffffaaffffffffacffffffffffffffccaacccabbaaccffffffffffffffcabaccfffffffffcabacfffffffcabacfffffffffffffffffffffffffffffff9ff
    ffffffffffffffffccabbaccccaacffffffffffcaffffffffffafffffffffffffffccaaaabbaacccffffffffffffffcabaccfffffffffcabccffffffcabacfffffffffffffffffffffffffffffffffff
    fffffffffffffffffccabaaaaaccfffffffffffcaffffffffffaffffffffffffffffccaaabaacccffffffffffffffcabbaccfffffffffcbacfffffffcabacfffffffffffffffffffffffffffffffffff
    fffffffffffffffffccaabaacccffffffffffffafffffffffffffffffffffffffffffccabaacccfffffffffffffffcabaccfff5fffffcabccfffffffcaacffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffccaaaaccfffffffffffffaffffffffffffffffffffffffffffccabaaaccffffffffffffffffabacccfffffffffcaacffffffffcacfffffffffffffffff5fffffffffffffffffff
    fffffffffffffffffffccaaaacfffffffffffffffffffffffffffffffffffffffffccabaacccffffffffffffffffcbbaccffffffffffcaccfffffffcaacfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffcccaaacffffffffffffffffffffffffffffffffffffffccaaaaacccfffffffffffffffffcbaccffffffffffcaacffffffffcacffffffffffffffff9fffffffffffffffffffff
    ffffffffffffffffffffffcccaacffffffffffffffffffffffffffffffffffffcaaaaacccffffffffffffffffffcbaccffffffffffcaccfffffffffccfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffccaaaccccfffffffffffffffffffcaaccfffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffccccccfffffffffffffffffffffcaaccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff9fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffffffffffffff66fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff9ffffffffffff66fff666ffffffffffffffffffffffffffffffffffffffffffffffffffff6f6ff666fffffffffff6ffff6fffffffffffffffffffffffff5ffffff
    ffffffffffffffffffffffffffffffffffffffffff66ff666ffffffffffffffffffffffffffffffffffffffffffffffffffffff6f6f66fffffffffffff66fff6ffffff666fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff6ff66ffffffffffffffffffffffffffffff6fffffffffffffffffffffffff66666fffffffffffffff6ff66ffff666fffffffffffffffffffff66ff
    ffffffffffffffffffffffffffffffffffffffff666666ffff666ffffffffffffffffffffffff66fffffffffffffffffffffff699b6ff6666ffffffffff6ff6fff666fffffffffffffffffffff6f6ff6
    fffffffffffffffffffffffffffffffffffffff6b99b6ff6666fffffffffffffffffffffffffff6fffffffffffff5ffffffff62299b666ffffffffffff66f66ff66fffffffffffffffffffffff6f6f66
    ffffffffffffffffffffffffffffffffffffff6b2299b666fffffffffffffffffffffff66ffff66ffffffffffffffffffffff6254996ffffffffffffff6ff6ff66ffffffffffffffffffffffff66666f
    ffffffffffff1fffffffffffffffffffffffff62452996fff6666fffffffffffffffffff6ffff6fffff6666ffffffffffffff62249b6ffffffffffffff6f66f66fffff66666ffffffffffffff699b6ff
    ffffffffffffffffffffffffffffffffffffff622429966666ff66ffffffffffffffffff66ff66fff666ffffffffffffffffff699b6ffffffffffff6666f6ff6fff6666fffffffffffffffff62299b66
    ffffffffffffffffffffffffffffffffffffff6b2299b6fffffffffffffffffffffffffff6ff6fff66fffffffffffffffffffff666fffffffffff66b99b66f66ff66ffffffffffffffffffff6254996f
    fffffffff4fffffffffffffffffffffffffffff6b99b6fffffffffffffffffffffffffff66666fff6fffffffffffffffffffffffffffffffffff6b999999b66ff66fffffffffffffffffffff62249b6f
    ffffffff414fffffffffffffffffffffffffffff6666ffffffffffffffffffffffffff66b99b66f66fffffffffffffffff6fffffffffffffffff6922299996f666fffffffffffffffffffffff699b6ff
    fffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6b999999b66fff6666fffffffffff6ffffffffffffffff6b22452999b66ffff66666fffffffffffffffff666fff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6922299996ff666fffffffffffff66fff666ffffffffff622451529996ff6666fff666fffff5fffffffffffffff
    ffffffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffff6b22452999b666ffffffffffffff66ff666ffffffffffff622445429996666ffffffffffffffffffffffffffffff
    fffffffffffffffddffffffd11ffffffffffffffffffffffffffffffffff9fffffff622451529996ffffffffffffffff6ff66ffffffffffffff6222442299b6fffffffffffffff4ffffffffffff66666
    ffffffffffffffd11ffffffd111fffffffffffffffffffffffffffffffffffffffff6224454299966666ffffffffff666666ffff666fffffffff6222229996ffffffffffffffffffffffff6666699999
    ffffffffffffffd111ffffffd11ffffffffffffffffffff1111fffffffffffffffff6222442299b6fff666fffffff6b99b6ff6666fffffffffff6b222999b6fffffffffffffffffff666669999911111
    fffffffffffffffd11ffffffd111ffffffffffffffff111111dbfffffffffffffffff6222229996ffffff6ffffff6b2299b666fffffffffffffff66b99b66ffffffffffffffff6666999991111177777
    fffffffffffffffd111fffffd111fffffff8888ff1111111ddbffffffffffffffffff6b222999b6fffffffffffff62452996fff6666ffffffffffff6666ffffffffffffff66669999111117777777777
    fffffffffffffffd111ffffffd111ffff88999988111111dbbffffffffffffffffffff66b99b66ffffffffffffff622429966666ff66ffffffffffffffffffffffffff66699991111177777777e7e7ee
    ffffffffffff89ffd111fffffd111fff8866666681111ddbffffffffffffff9fffffffff6666ffffffffffffffff6b2299b6fffffffffffffffffffffffffffffff66699911111111777777e7e7eeeee
    ffffffffff866fffd111fff11d1111d188886688111ddbbffffffffffffffffffffffffffffffffffffffffffffff6b99b6fffffffffffffffffffffffffffff66699911111111177777e7e7e7e7eeee
    ffffffff866fffffd1111d1ddd1111dd1188881111ddbfffffffffffffffffffffffffffffffffffffffffffffffff6666fffffffffffffffffffffffffff66699911117171111777777777e7eeeee4e
    ffffff866dd11111dd111dddddd111dddd111111dddbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66999111111111171777766777777eee4e4e4
    ffff866ddddddddbdd1dddbb66d1ddd1111111dddbbdd11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff669911188881818181777676776667e7e4e4444
    ffffff66bddddbbbddddbbb6b6ddd11111111ddbbdd11111fffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffff669911888888181888188886767667777e7eee444
    fffffffff66bbbbbbbbb6b6b6bbbbb11111dddbbd111111111fffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffff669911888888888881888888866666777777e7e7e4e
    ffffffffffff66bddddbb6b6bdddddb11dddbbbdddd111111111ffffffffffffffffffffffffffff66fff666fffffffffffffffffffffffffff66991111888888888888888888699b6ee6667e7e7e7e4
    fff9ffffffffffd444ddbb6bdd444ddbddbbbdddddddd11111111fffffffffff99fffffffffffff66ff666fffffffffffffff9fffffffffff66991111111118881118888888862299b666eeeee77eeee
    fffffffffffff244444dbbbbd44444dbbbbbdddddddddddd1111111fffffff6688fffffffffffff6ff66fffffffffffffffffffffffffff669911111111111111118881888886254996888eeeeeeeeee
    ffffffffffff2455544dddd2245544ddbb66bbdddddddddddd1111111fff6688fffffffffffff666666ffff666fffffffffffffffffff669911111188181111181818181888862249b6888888eeeeeee
    ffffffffff224554422fff24455542dbb6666bbbbbddddddddddd111dd6688ffffffffffffff6b99b6ff6666fffffffffffffffffff6699111111111181818181818188888888699b6888888eeeee888
    ffffffff224555422ffff245555422fffffff66666bbbbbddddddddd6688fffffffffffffff6b2299b666fffffffffffffffffffff699111111888881181818881888888888888666888888eee888888
    fffffff22444422ffff224555422ffffffffffffff66666bbbbddd6688fffffffffffffffff62452996fff6666ffffffffffffff66911111118881818188888888888888888888888888888ee8888888
    ffffff2442222ffff222444222ffffffffffffffffffffff666b6688fffffffffffffffffff622429966666ff66ffffffffffff699111e1e11118818188888888eeeee88888888888888888888888888
    fffff2222fffffff2244222fffffffffffffffffffffffffffff88fffffffffffffffffffff6b2299b6ffffffffffffffffff669111eeee1e1188888888888eeeee7e777788818888888888888881188
    ffff2ffffffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff6b99b6ffffffffffffffffff6991eeeeeeeeeeee888888eeeeeee7777717111111181888818881818888
    ff2fffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666fffffffffffffffff66911eeee7e7eeeeeee888eeeeee7777778181811118118188181818181118
    ffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffff6991eeeee7e7e77e7e7eeeee7e7777777788888888188811111818111111888
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6911eeeeeee7e7e7777777777777777777777778888888888111181811888888
    `)
game.splash("SPACE ALIEN")
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
effects.starField.startScreenEffect()
ship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(ship, 100, 100)
ship.setFlag(SpriteFlag.StayInScreen, true)
ship.bottom = 100
animation.runImageAnimation(
ship,
[img`
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . d 1 1 d . . . . . . 
    . . . . . . 1 8 8 1 . . . . . . 
    . . . . . . 1 8 8 1 . . . . . . 
    . . . . . 1 1 8 8 1 1 . . . . . 
    . . . . 1 d 1 1 1 1 d 1 . . . . 
    9 . . 1 d d 1 1 1 1 d d 1 . . 9 
    6 . 1 d d d 6 1 1 6 d d d 1 . 6 
    6 1 d d d d 6 1 1 6 d d d d 1 6 
    6 d b b b b c b b c b b b b d 6 
    . . . . 4 5 4 . . 4 5 4 . . . . 
    . . . . 2 4 2 . . 2 4 2 . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    `,img`
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . d 1 1 d . . . . . . 
    . . . . . . 1 8 8 1 . . . . . . 
    . . . . . . 1 8 8 1 . . . . . . 
    . . . . . 1 1 8 8 1 1 . . . . . 
    . . . . 1 d 1 1 1 1 d 1 . . . . 
    9 . . 1 d d 1 1 1 1 d d 1 . . 9 
    6 . 1 d d d 6 1 1 6 d d d 1 . 6 
    6 1 d d d d 6 1 1 6 d d d d 1 6 
    6 d b b b b c b b c b b b b d 6 
    . . . . 2 4 2 . . 2 4 2 . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
ship.z += 1
info.setLife(3)
game.onUpdateInterval(5000, function () {
    if (巨型敵人out >= 1) {
        巨型敵人2 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 0, 20)
        巨型敵人2.setKind(SpriteKind.巨型敵人)
        巨型敵人2.x = randint(10, 150)
        巨型敵人2.z = 5
        animation.runImageAnimation(
        巨型敵人2,
        [img`
            ................ca..............
            ...............ca...............
            ..............cbc...............
            ..............cc................
            ..............cbc...............
            ...............cc...............
            ...............cbc..............
            .........c......cc.....c........
            .........c.....cbdc....c........
            .........bc....cabc...cb........
            ..........bc..ccccc..cb.........
            ...........bccadddaccb..........
            .......c....cdbbbbbdc....c......
            .......bc..cabbcccbbac..cb......
            ........bcccaccdddccacccb.......
            ...........ccddbbbddcc..........
            .........bccdbbbbbbbdccb........
            ........bccabaa222aabaccb.......
            ........c.caac24512caac.c.......
            ........c..acd24452dca..c.......
            ........c..cdb22442bdc..c.......
            ...........222c222c222..........
            ..........24512ccc24512.........
            ..........24452aba24452.........
            ..........224426b622442.........
            ..........b222.b.b.222b.........
            ..........dba..b.b..abd.........
            ..........dbac.....cabd.........
            ..........dba.......abd.........
            ..........dbac.....cabd.........
            ...........ba.......ab..........
            ............bc.....cb...........
            `,img`
            ...............ac...............
            ................ac..............
            ................cbc.............
            .................cc.............
            ................cbc.............
            ................cc..............
            ...........c...cbc...c..........
            ..........bc...cc....cb.........
            ..........c...cbdc....c.........
            ..........bc..cabc...cb.........
            ........c..bc.ccccc.cb..c.......
            ........c...ccadddacc...c.......
            ........bc..cdbbbbbdc..cb.......
            .........bccabbcccbbaccb........
            ..........bcaccdddccac..........
            ...........ccddbbbddcc..........
            ........bcccdbbbbbbbdcccb.......
            ......bcc.cabaa222aabac.ccb.....
            ......c...caac24512caac...c.....
            ......c....acd24452dca....c.....
            ...........cdb22442bdc..........
            ...........222c222c222..........
            ..........24512ccc24512.........
            ..........24452aba24452.........
            ..........224426b622442.........
            .........db222.b.b.222bd........
            ........dbbaa.b...b.aabbd.......
            .......dbaa.c.......c.aabd......
            .......ba.c...........c.ab......
            .......bc...............cb......
            ........bc.............cb.......
            ................................
            `],
        200,
        true
        )
    }
    巨型敵人out = 巨型敵人out + 1
})
game.onUpdateInterval(2000, function () {
    if (巨型敵人2 != null && 巨型敵人2.z > 0) {
        敵子彈2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, 巨型敵人2, 0, 100)
        敵子彈2.setKind(SpriteKind.敵子彈)
        animation.runImageAnimation(
        敵子彈2,
        [img`
            . . . . . . . . 
            . . . 2 . . . . 
            . . . . . . . . 
            . . . 2 . 2 . . 
            . . . 2 . . . . 
            . . . 2 2 . . . 
            . . . . 2 . . . 
            . . 2 . 2 2 . . 
            . . . 2 4 2 . . 
            . . . 2 4 2 . . 
            . . . 2 2 . . . 
            . . 2 4 2 . . . 
            . . 2 5 4 2 . . 
            . . 2 1 5 2 . . 
            . . . 2 2 . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . 2 . . . 
            . . . . . . . . 
            . . 2 . 2 . . . 
            . . . . 2 . . . 
            . . . 2 2 . . . 
            . . . 2 . . . . 
            . . 2 2 . 2 . . 
            . . 2 4 2 . . . 
            . . 2 4 2 . . . 
            . . . 2 2 . . . 
            . . . 4 2 2 . . 
            . . 2 5 4 2 . . 
            . . 2 1 5 2 . . 
            . . . 2 2 . . . 
            . . . . . . . . 
            `],
        100,
        true
        )
    }
})
game.onUpdateInterval(50000, function () {
    if (enemyOut >= 1) {
        生命 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e 2 2 . 2 2 . . . . . 
            . . . . e 2 2 2 2 2 4 2 . . . . 
            . . . . e 2 2 2 2 4 2 2 . . . . 
            . . . . e 2 2 2 2 2 2 2 . . . . 
            . . . . . e 2 2 2 2 2 . . . . . 
            . . . . . . e 2 2 2 . . . . . . 
            . . . . . . . e 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 0, 30)
        生命.setKind(SpriteKind.Food)
        生命.x = randint(10, 150)
    }
    enemyOut = enemyOut + 1
})
game.onUpdateInterval(1000, function () {
    敵人2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, -60)
    敵人2.setKind(SpriteKind.Enemy)
    敵人2.x = randint(10, 150)
    animation.runImageAnimation(
    敵人2,
    [img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 b 9 9 9 b 6 . . . . . 
        . . . 6 b 9 c 2 2 9 b 6 . . . . 
        . . . 6 9 c 2 5 1 2 9 6 . . . . 
        . . . 6 9 2 2 4 5 2 9 6 . . . . 
        . . . 6 9 c 2 2 2 c 9 6 . . . . 
        . . . 6 b 9 c 2 c 9 b 6 . . . . 
        . . . . 6 b 9 9 9 b 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 . 6 . 6 . 6 . . . . . 
        . . . . 6 . 6 . 6 . 6 6 . . . . 
        . . . 6 6 . 6 . 6 . . 6 . . . . 
        . . . 6 . . 6 . 6 6 . 6 . . . . 
        . . . 6 . 6 6 . . 6 . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        `,img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 b 9 9 9 b 6 . . . . . 
        . . . 6 b 9 c 2 2 9 b 6 . . . . 
        . . . 6 9 c 2 5 1 2 9 6 . . . . 
        . . . 6 9 2 2 4 5 2 9 6 . . . . 
        . . . 6 9 c 2 2 2 c 9 6 . . . . 
        . . . 6 b 9 c 2 c 9 b 6 . . . . 
        . . . . 6 b 9 9 9 b 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . 6 6 . 6 . 6 . 6 6 . . . . 
        . . 6 6 . . 6 . 6 . . 6 6 . . . 
        . . 6 . . 6 6 . 6 6 . . 6 . . . 
        . . 6 . 6 6 . . . 6 6 . . . . . 
        . . . . 6 . . . . . 6 . . . . . 
        . . . . 6 . . . . . 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
})
game.onUpdateInterval(1000, function () {
    敵人 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 60)
    敵人.setKind(SpriteKind.Enemy)
    敵人.x = randint(10, 150)
    animation.runImageAnimation(
    敵人,
    [img`
        . . . . . 6 . . . 6 . . . . . . 
        . . . . . 6 . . . 6 . . . . . . 
        . . . . . 6 . . 6 6 . 6 . . . . 
        . . . 6 . 6 6 . 6 . . 6 . . . . 
        . . . 6 . . 6 . 6 . 6 6 . . . . 
        . . . 6 6 . 6 . 6 . 6 . . . . . 
        . . . . 6 . 6 . 6 . 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 b 9 9 9 b 6 . . . . . 
        . . . 6 b 9 c 2 2 9 b 6 . . . . 
        . . . 6 9 c 2 5 1 2 9 6 . . . . 
        . . . 6 9 2 2 4 5 2 9 6 . . . . 
        . . . 6 9 c 2 2 2 c 9 6 . . . . 
        . . . 6 b 9 c 2 c 9 b 6 . . . . 
        . . . . 6 b 9 9 9 b 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 . . . . . 6 . . . . . 
        . . . . 6 . . . . . 6 . . . . . 
        . . . . 6 6 . . . 6 6 . 6 . . . 
        . . 6 . . 6 6 . 6 6 . . 6 . . . 
        . . 6 6 . . 6 . 6 . . 6 6 . . . 
        . . . 6 6 . 6 . 6 . 6 6 . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 b 9 9 9 b 6 . . . . . 
        . . . 6 b 9 c 2 2 9 b 6 . . . . 
        . . . 6 9 c 2 5 1 2 9 6 . . . . 
        . . . 6 9 2 2 4 5 2 9 6 . . . . 
        . . . 6 9 c 2 2 2 c 9 6 . . . . 
        . . . 6 b 9 c 2 c 9 b 6 . . . . 
        . . . . 6 b 9 9 9 b 6 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        `],
    200,
    true
    )
})
