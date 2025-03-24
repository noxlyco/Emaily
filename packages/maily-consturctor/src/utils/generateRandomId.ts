export const generateRandomId = (name: string) => {
  return `${name}--${crypto.randomUUID()}`
}

export const parseRandomId = (id: string) => {
  return id.split('--')[0]
}