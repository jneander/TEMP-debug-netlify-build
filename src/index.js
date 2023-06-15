import {chromium} from 'playwright'

export async function handler(event) {
  chromium.launch() // Ensure no tree-shaking
  return {statusCode: 200}
}
