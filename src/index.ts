import type {HandlerEvent} from '@netlify/functions'
import {chromium} from 'playwright'

export async function handler(event: HandlerEvent) {
  chromium.launch() // Ensure no tree-shaking
  return {statusCode: 200}
}
