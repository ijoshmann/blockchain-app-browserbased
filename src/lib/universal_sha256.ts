function sha256_node(data: string): Promise<string> {
  const crypto = require('crypto')
  return Promise.resolve(crypto.createHash('sha256').update(data).digest('hex'))
}


async function sha256_browser(data: string): Promise<string> {
  const msgUnitArray = new TextEncoder().encode(data)
  const hashByteArray = await crypto.subtle.digest('SHA-256', msgUnitArray)
  const hashArray = Array.from(new Uint8Array(hashByteArray))
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
  return hashHex
}


export const sha256 = typeof window === "undefined" ? sha256_node : sha256_browser

