import { CookieOptions } from 'cookie-storage/lib/cookie-options'
import { Context } from 'koa'
import { omit } from 'ramda'
import { MinimalStorage } from './MinimalStorage'

export class ServerCookieStorage implements MinimalStorage {
  constructor(private readonly requestCtx: Context) {}

  public getItem(item: string): string | null {
    return decodeURIComponent(
      this.requestCtx.cookies.get(item, { signed: false }),
    )
  }

  public setItem(item: string, value: string, options?: CookieOptions): void {
    this.requestCtx.cookies.set(item, value, {
      ...omit(['date'], options),
      signed: false,
      expires: undefined,
    })
  }
}