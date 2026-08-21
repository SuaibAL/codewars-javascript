/*প্রথমে শেষ character বের করব।
তারপর check করব সেটা "!" কিনা।
যদি হয়, তাহলে শেষ character বাদ দেব।
না হলে original string return করব।*/

/*Concept:
- const
- string indexing
- string.length
- if/else
- slice()*/


function remove (string) {
  const lastcharacter = string[string.length - 1];
  if (lastcharacter==="!"){
    return string.slice(0,string.length - 1)
  }
    else{
      return string
   }
}
