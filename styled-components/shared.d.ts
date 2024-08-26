/* eslint-disable no-unused-vars */
type DateTimeString = string
type TimeStamp = number // milliseconds
type TimeStampSeconds = number // seconds
type Email = string
type URLString = string
type HexColor = `#${string}` | 'transparent'
type Filename = `${string}.${string}`
type CronExpression = `${string} ${string} ${string} ${string} ${string}`

interface Window {
  dataLayer: Array<Record<string, any>>
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
