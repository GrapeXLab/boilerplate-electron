export function maskMoney(value: string | number) {
  const formater = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return formater.format(Number(value))
}
