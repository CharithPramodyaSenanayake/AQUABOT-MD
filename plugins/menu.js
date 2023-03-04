const _0x1933d9 = (function () {
    let _0x10081e = true
    return function (_0x4a27bb, _0x497e5a) {
      const _0x4423c5 = _0x10081e
        ? function () {
            if (_0x497e5a) {
              const _0x4225b = _0x497e5a.apply(_0x4a27bb, arguments)
              return (_0x497e5a = null), _0x4225b
            }
          }
        : function () {}
      return (_0x10081e = false), _0x4423c5
    }
  })(),
  _0x2ba283 = _0x1933d9(this, function () {
    return _0x2ba283
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2ba283)
      .search('(((.+)+)+)+$')
  })
_0x2ba283()
const _0x5b3f37 = (function () {
  let _0x5500bf = true
  return function (_0x4021d8, _0x5197d4) {
    const _0x29a92c = _0x5500bf
      ? function () {
          if (_0x5197d4) {
            const _0x3c1aef = _0x5197d4.apply(_0x4021d8, arguments)
            return (_0x5197d4 = null), _0x3c1aef
          }
        }
      : function () {}
    return (_0x5500bf = false), _0x29a92c
  }
})()
;(function () {
  _0x5b3f37(this, function () {
    const _0x274e07 = new RegExp('function *\\( *\\)'),
      _0x37e5d3 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x24bd24 = _0x5a355a('init')
    if (
      !_0x274e07.test(_0x24bd24 + 'chain') ||
      !_0x37e5d3.test(_0x24bd24 + 'input')
    ) {
      _0x24bd24('0')
    } else {
      _0x5a355a()
    }
  })()
})()
const config = require('../config'),
  msg =
    '◉═════════════◉\n    ☮ 𝙿𝙴𝙰𝙲𝙴𝙼𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 ☮\n◉═════════════◉\n\n┌─(📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ)\n│.song\n│.video\n│.fb\n│.ig\n│.tiktok\n│.mediafire \n│.img\n│.downapk\n└─────────◉\n┌─(🔍ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ)\n│.cric \n│.findapk\n│.getyt\n│.google\n│.lyrics\n│.wallpaper\n└─────────◉\n┌─(🧰ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ🧰)\n│.sticker\n│.imagesticker\n│.vsticker\n│.pemoji\n│.sticemoji \n│.emomix\n│.removebg\n│.logo1\n│.mp4audio\n│.ss\n└─────────◉\n┌─(🪀ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ🪀)\n│.add\n│.kick\n│.left\n│.promote\n│.demote\n│.mute\n│.unmute\n│.tagall \n│.welcome \n└─────────◉ \n┌─(💻ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ💻) \n│.update\n│.ping\n│.jid\n│.block\n│.unblock\n└─────────◉\n┌─(💫ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ💫)\n│.alive\n└─────────◉'
async function menu(_0x3be3c0, _0x3bdc21) {
  const _0x4b9f1b = _0x3bdc21.key.remoteJid
  if (config.WORKTYPE == 'private') {
    const _0x317856 = _0x3bdc21.key.fromMe
        ? _0x3be3c0.user.id.split(':')[0] + '@s.whatsapp.net' ||
          _0x3be3c0.user.id
        : _0x3bdc21.key.participant || _0x3bdc21.key.remoteJid,
      _0x888d6 = _0x317856.split('@')[0],
      _0x3d3b28 = config.SUDO !== false ? config.SUDO.includes(_0x888d6) : '',
      _0x379660 = config.OWN.includes(_0x888d6),
      _0x20d89a = _0x3be3c0.user.id.split(':')[0],
      _0x3b8c39 = _0x20d89a.includes(_0x888d6),
      _0x50b7c3 = _0x379660
        ? _0x379660
        : _0x3b8c39
        ? _0x3b8c39
        : _0x3d3b28
        ? _0x3d3b28
        : ''
    if (!_0x50b7c3) {
      return
    }
    const _0x1ead26 = {
      text: '✌',
      key: _0x3bdc21.key,
    }
    const _0x4eef5e = { react: _0x1ead26 }
    if (config.AUTO_REACT == 'true') {
      await _0x3be3c0.sendMessage(_0x4b9f1b, _0x4eef5e)
    }
    const _0x39d3ad = { text: msg }
    const _0x508298 = { quoted: _0x3bdc21 }
    const _0x2bc4d2 = await _0x3be3c0.sendMessage(
        _0x4b9f1b,
        _0x39d3ad,
        _0x508298
      ),
      _0x31c0ef = {
        text: '🔖',
        key: _0x2bc4d2.key,
      }
    const _0x1c313a = { react: _0x31c0ef }
    if (config.AUTO_REACT == 'true') {
      await _0x3be3c0.sendMessage(_0x4b9f1b, _0x1c313a)
    }
  }
  if (config.WORKTYPE == 'public') {
    const _0x44e64c = {
      text: '📜',
      key: _0x3bdc21.key,
    }
    const _0x5427d5 = { react: _0x44e64c }
    if (config.AUTO_REACT == 'true') {
      await _0x3be3c0.sendMessage(_0x4b9f1b, _0x5427d5)
    }
    const _0xc2c1ab = { text: msg }
    const _0x3798a5 = { quoted: _0x3bdc21 }
    const _0x2a630c = await _0x3be3c0.sendMessage(
        _0x4b9f1b,
        _0xc2c1ab,
        _0x3798a5
      ),
      _0x2823ac = {
        text: '🔖',
        key: _0x2a630c.key,
      }
    const _0x2260c2 = { react: _0x2823ac }
    if (config.AUTO_REACT == 'true') {
      await _0x3be3c0.sendMessage(_0x4b9f1b, _0x2260c2)
    }
  }
}
module.exports = menu
function _0x5a355a(_0x57a999) {
  function _0x1bce77(_0x5b0d74) {
    if (typeof _0x5b0d74 === 'string') {
      return function (_0x5e0b2e) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x5b0d74 / _0x5b0d74).length !== 1 || _0x5b0d74 % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x1bce77(++_0x5b0d74)
  }
  try {
    if (_0x57a999) {
      return _0x1bce77
    } else {
      _0x1bce77(0)
    }
  } catch (_0x1c6cff) {}
}
;(function () {
  const _0x5bd3c0 = function () {
    let _0x38bc3d
    try {
      _0x38bc3d = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x214185) {
      _0x38bc3d = window
    }
    return _0x38bc3d
  }
  const _0x194d7a = _0x5bd3c0()
  _0x194d7a.setInterval(_0x5a355a, 4000)
})()
