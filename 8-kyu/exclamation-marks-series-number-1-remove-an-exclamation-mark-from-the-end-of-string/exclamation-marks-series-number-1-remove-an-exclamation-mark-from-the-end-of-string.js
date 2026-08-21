function remove (string) {
  const lastcharacter = string[string.length - 1];
  if (lastcharacter==="!"){
    return string.slice(0,string.length - 1)
  }
    else{
      return string
   }
}