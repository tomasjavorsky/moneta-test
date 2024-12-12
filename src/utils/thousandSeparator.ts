export function numberWithThousands(x: number, separator: string = " ") {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
