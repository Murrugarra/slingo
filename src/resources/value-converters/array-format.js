export class ArrayFormatValueConverter {
  toView(value) {
    if (value) {
      let result = ''
      value.forEach(s => {
        result += s + " - "
      })
      return result.substring(0, result.length - 2)
    }
  }

  fromView(value) {
  }
}

 