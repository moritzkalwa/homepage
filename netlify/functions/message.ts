import got from "got"
import { Handler } from "@netlify/functions";

const token = process.env.TELEGRAM_TOKEN
const chat_id = process.env.TELEGRAM_TO
const telegram = (m: string) => `https://api.telegram.org/bot${token}/${m}`
const corsOrigins = ["https://moritzkalwa.dev", "http://localhost:3000"]
const cors = (headers: Record<string, string>) => {
  const origin = headers["origin"]

  if (corsOrigins.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
    }
  }

  return { "Access-Control-Allow-Origin": corsOrigins[0] }
}

const send = async (text: string) => {
  const url = new URL(telegram("sendMessage"))

  const searchParams = { text, chat_id }

  Object.entries(searchParams).forEach(p => {
    url.searchParams.set(...p)
  })

  await got(url.toString(), { method: "POST" })
}

export const handler: Handler = async event => {
  if (event.httpMethod.toLowerCase() !== "post") return { statusCode: 404 }
  const headers = { ...cors(event.headers) }

  const payload = JSON.parse(event.body) as Record<string, string>
  const message = Object.entries(payload)
    .map(([type, val]) => `${type}: ${val}`)
    .join("\n")

  if (payload) {
    await send(message)

    return {
      statusCode: 200,
      headers,
    }
  }

  return {
    statusCode: 404,
    headers,
  }
}