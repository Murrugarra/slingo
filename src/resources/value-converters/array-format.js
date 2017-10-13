export class ArrayFormatValueConverter {
  toView(value) {
    if (value) {
      
      if (value.length == 0) return "-"

      let result = ""

      value.forEach(s => {
        result += s + " - "
      })
      return result.substring(0, result.length - 2)
    }
  
  }

  fromView(value) {
  }
}

 