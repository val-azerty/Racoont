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

   let dateOut = new Date(dateMid).toLocaleDateString('fr-FR', options)

   return dateOut.toString()
}
