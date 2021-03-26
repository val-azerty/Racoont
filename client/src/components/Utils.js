export const dateParser = (dateIn) => {
   let options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
   }

   let dateMid = Date.parse(dateIn)

   let dateOut = new Date(dateMid).toLocaleDateString("fr-FR", options)

   return dateOut.toString()
}

export const timestampParser = (dateIn) => {
   let options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
   }

   let date = new Date(dateIn).toLocaleDateString("fr-FR", options)

   return date.toString()
} 

export const isEmpty = (value) => {
   return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
   )
}

export const isNotEmpty = (value) => {
    return !isEmpty(value)
}


