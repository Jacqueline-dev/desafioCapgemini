function areAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false
  }
  for (let i = 0; i < areAnagram; i++) {
    if (count[i]) return false
    return True
  }

  const myString = ''
  const splits = myString.split()
  console.log(splits)

  var str1 = string1.split('').sort().join('')
  var str2 = string2.split('').sort().join('')

  var result = str1 === str2
  return result
}

console.log(areAnagram('alegria', 'regalia'))
