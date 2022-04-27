
    const str = `
  010-1111-1111
  the12@gmail.com
  https://regexr.com/  
  The quick brown fox jumps over the lazy dog.
  aabbbbccccdd
`
console.log(
  str.match(/(?<=@).{1,}/g)
)