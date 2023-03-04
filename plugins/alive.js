const _0x1449bb = (function () {
    let _0x2222f0 = true
    return function (_0x24893d, _0x122c92) {
      const _0x5ef297 = _0x2222f0
        ? function () {
            if (_0x122c92) {
              const _0x21a171 = _0x122c92.apply(_0x24893d, arguments)
              return (_0x122c92 = null), _0x21a171
            }
          }
        : function () {}
      return (_0x2222f0 = false), _0x5ef297
    }
  })()
  const _0x3c6291 = _0x1449bb(this, function () {
    return _0x3c6291
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x3c6291)
      .search('(((.+)+)+)+$')
  })
  _0x3c6291()
  ;(function () {
    const _0x1fb1b9 = function () {
      const _0x3bbdab = {
        akAfm: function (_0x1fdc55, _0x557af7) {
          return _0x1fdc55(_0x557af7)
        },
        uZyls: function (_0x37d0ec, _0x16e70c) {
          return _0x37d0ec + _0x16e70c
        },
        oOBDG: function (_0x521ebc, _0x2795af) {
          return _0x521ebc + _0x2795af
        },
        uRLdy: 'return (function() ',
        BzAkE: '{}.constructor("return this")( )',
      }
      let _0x5355e3
      try {
        _0x5355e3 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0xacf935) {
        _0x5355e3 = window
      }
      return _0x5355e3
    }
    const _0x151106 = _0x1fb1b9()
    _0x151106.setInterval(_0x2d0ad6, 4000)
  })()
  const _0x4621aa = (function () {
    let _0x35486f = true
    return function (_0x3453d3, _0x4afed6) {
      const _0x38e08a = _0x35486f
        ? function () {
            if (_0x4afed6) {
              const _0x7e492d = _0x4afed6.apply(_0x3453d3, arguments)
              return (_0x4afed6 = null), _0x7e492d
            }
          }
        : function () {}
      return (_0x35486f = false), _0x38e08a
    }
  })()
  ;(function () {
    _0x4621aa(this, function () {
      const _0x5977d7 = new RegExp('function *\\( *\\)'),
        _0x40a9a3 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        _0x59c1d2 = _0x2d0ad6('init')
      if (
        !_0x5977d7.test(_0x59c1d2 + 'chain') ||
        !_0x40a9a3.test(_0x59c1d2 + 'input')
      ) {
        _0x59c1d2('0')
      } else {
        _0x2d0ad6()
      }
    })()
  })()
  const config = require('../config'),
    prefix = '.',
    got = require('got')
  const axios = require('axios')
  async function alive(_0x4ae62e, _0xc3855b) {
    const _0x48a0bd = _0xc3855b.key.remoteJid
    if (config.WORKTYPE == 'private') {
      const _0x4ce59b = _0xc3855b.key.fromMe
          ? _0x4ae62e.user.id.split(':')[0] + '@s.whatsapp.net' ||
            _0x4ae62e.user.id
          : _0xc3855b.key.participant || _0xc3855b.key.remoteJid,
        _0x2b694e = _0x4ce59b.split('@')[0],
        _0x5ccc27 = config.SUDO !== false ? config.SUDO.includes(_0x2b694e) : '',
        _0x30e92e = config.OWN.includes(_0x2b694e),
        _0x5bfcd1 = _0x4ae62e.user.id.split(':')[0],
        _0xfb0b91 = _0x5bfcd1.includes(_0x2b694e),
        _0x474c15 = _0x30e92e
          ? _0x30e92e
          : _0xfb0b91
          ? _0xfb0b91
          : _0x5ccc27
          ? _0x5ccc27
          : ''
      if (!_0x474c15) {
        return
      }
      const _0x2700cb = {
        text: '✌',
        key: _0xc3855b.key,
      }
      const _0x321fbf = { react: _0x2700cb }
      if (config.AUTO_REACT == 'true') {
        await _0x4ae62e.sendMessage(_0x48a0bd, _0x321fbf)
      }
      var _0x532ce6 = ''
      if (config.ALIVEMSG == 'default') {
        _0x532ce6 =
          '*🍭HI! Bot Online now.*/n/n✌*Developer:* ```Charith Pramodya Senanayake```/n✌*Github:* https://github.com/CharithPramodyaSenanayake/n/n```Thank You For Using PEACE MD```'
      }
      if (config.ALIVEMSG !== 'default') {
        _0x532ce6 = config.ALIVEMSG
      }
      const _0x1f9c31 = {
        displayText: config.URL_1NAME,
        url: config.URL_1LINK,
      }
      const _0xb714a = { urlButton: _0x1f9c31 }
      const _0x594cb2 = {
        displayText: config.URL_2NAME,
        url: config.URL_2LINK,
      }
      const _0x246740 = { urlButton: _0x594cb2 }
      const _0x2fde49 = [
          _0xb714a,
          _0x246740,
          {
            quickReplyButton: {
              displayText: 'MENU',
              id: prefix + 'menu',
            },
          },
          {
            quickReplyButton: {
              displayText: 'OWNER',
              id: prefix + 'owner',
            },
          },
        ],
        _0x519f5b = { rejectUnauthorized: false }
      const _0x1817aa = { https: _0x519f5b }
      var _0x26080b = got(config.ALIVE_LOGO, _0x1817aa),
        _0x1a51e1 = _0x26080b.buffer()
      _0x1a51e1.then(async (_0x4ff6fd) => {
        const _0x30731b = {
          caption: _0x532ce6,
          footer: config.FOOTER,
          templateButtons: _0x2fde49,
          image: _0x4ff6fd,
        }
        const _0x39c272 = _0x30731b
        await _0x4ae62e.sendMessage(_0x48a0bd, _0x39c272)
      })
    } else {
      if (config.WORKTYPE == 'public') {
        const _0x76a96c = {
          text: '✌',
          key: _0xc3855b.key,
        }
        const _0x581cae = { react: _0x76a96c }
        if (config.AUTO_REACT == 'true') {
          await _0x4ae62e.sendMessage(_0x48a0bd, _0x581cae)
        }
        var _0x532ce6 = ''
        if (config.ALIVEMSG == 'default') {
          _0x532ce6 =
            '*🍭HI! Bot Online now.*/n/n✌*Developer:* ```Charith Pramodya Senanayake```/n✌*Github:* https://github.com/CharithPramodyaSenanayake/n/n```Thank You For Using PEACE MD```*'
        }
        if (config.ALIVEMSG !== 'default') {
          _0x532ce6 = config.ALIVEMSG
        }
        const _0x19d0bb = {
          displayText: config.URL_1NAME,
          url: config.URL_1LINK,
        }
        const _0x1f3bff = {
          index: 1,
          urlButton: _0x19d0bb,
        }
        const _0x451045 = {
          displayText: config.URL_2NAME,
          url: config.URL_2LINK,
        }
        const _0xfe1af5 = {
          index: 2,
          urlButton: _0x451045,
        }
        const _0x7581b2 = [
            _0x1f3bff,
            _0xfe1af5,
            {
              index: 3,
              quickReplyButton: {
                displayText: 'MENU',
                id: prefix + 'menu',
              },
            },
            {
              index: 4,
              quickReplyButton: {
                displayText: 'OWNER',
                id: prefix + 'owner',
              },
            },
          ],
          _0x47d04e = {
            caption: _0x532ce6,
            footer: config.FOOTER,
            templateButtons: _0x7581b2,
            image: {},
          }
        _0x47d04e.image.url = config.ALIVE_LOGO
        const _0x28e968 = _0x47d04e
        await _0x4ae62e.sendMessage(_0x48a0bd, _0x28e968)
      }
    }
  }
  module.exports = alive
  function _0x2d0ad6(_0x5a7557) {
    function _0x534cd4(_0x655c60) {
      if (typeof _0x655c60 === 'string') {
        return function (_0x652a25) {}
          .constructor('while (true) {}')
          .apply('counter')
      } else {
        if (('' + _0x655c60 / _0x655c60).length !== 1 || _0x655c60 % 20 === 0) {
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
      _0x534cd4(++_0x655c60)
    }
    try {
      if (_0x5a7557) {
        return _0x534cd4
      } else {
        _0x534cd4(0)
      }
    } catch (_0x57b867) {}
  }
  
