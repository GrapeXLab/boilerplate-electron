import { IpcMain } from 'electron'

type LoggerType = 'log' | 'error' | 'warn'

export interface Logger {
  name: string
  message: string | object
  type: LoggerType
}

function logger({ name, message, type }: Logger): void {
  const formattedMessage = typeof message === 'object' ? JSON.stringify(message, null, 2) : message

  switch (type) {
    case 'log':
      console.log(`[LOG] ${name} - ${formattedMessage}`)
      break
    case 'error':
      console.error(`[ERROR] ${name} - ${formattedMessage}`)
      break
    case 'warn':
      console.warn(`[WARN] ${name} - ${formattedMessage}`)
      break
    default:
      console.log(`[${name}] Unknown log type: ${formattedMessage}`)
  }
}

export function initializeLogger(ipc: IpcMain): void {
  ipc.on('logger', (_, data: Logger) => {
    if (!data || !data.name || !data.type || !data.message) {
      console.error('Invalid logger data received:', data)
      return
    }

    logger(data)
  })
}
