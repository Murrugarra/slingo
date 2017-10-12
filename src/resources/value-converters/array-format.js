export class ArrayFormatValueConverter {
  toView(value) {
    let result = ''
    value.forEach(s => {
      result += s + " - "
    })
    return result.substring(0, result.length - 2)
  }

  fromView(value) {
  }
}

