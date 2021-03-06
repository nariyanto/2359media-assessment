const BaseConfig = require('../core/BaseConfig')
const expiresInRegexp = /^(\d\d?m$|\d\d?h$|\d\d?d$)/ // valid minutes, hours, days like: 1m, 1h, 1d, 11m, 11h, 11d

class TokenConfig extends BaseConfig {
  constructor () {
    super()

    this.access = {
      type: 'TOKEN_TYPE_ACCESS',
      secret: this.set(process.env.TOKEN_ACCESS_SECRET, this.joi.string().min(30).max(100).required()),
      expiresIn: this.set(process.env.TOKEN_ACCESS_EXP, this.joi.string().regex(expiresInRegexp).required())
    }

    this.refresh = {
      type: 'TOKEN_TYPE_REFRESH',
      secret: this.set(process.env.TOKEN_REFRESH_SECRET, this.joi.string().min(30).max(100).required()),
      expiresIn: this.set(process.env.TOKEN_REFRESH_EXP, this.joi.string().regex(expiresInRegexp).required())
    }

    this.resetPassword = {
      type: 'TOKEN_TYPE_RESET_PASSWORD',
      secret: this.set(process.env.TOKEN_RESET_PASSWORD_SECRET, this.joi.string().min(30).max(100).required()),
      expiresIn: this.set(process.env.TOKEN_RESET_PASSWORD_EXP, this.joi.string().regex(expiresInRegexp))
    }

    this.emailConfirm = {
      type: 'TOKEN_TYPE_EMAIL_CONFIRM',
      secret: this.set(process.env.TOKEN_EMAIL_CONFIRM_SECRET, this.joi.string().min(30).max(100).required()),
      expiresIn: this.set(process.env.TOKEN_EMAIL_CONFIRM_EXP, this.joi.string().regex(expiresInRegexp).required())
    }
  }
}

module.exports = new TokenConfig()