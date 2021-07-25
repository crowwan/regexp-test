const str = `
010-1234-5678
crowwan@naver.com
www.naver.com
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','gi');
const regexp = /the/gi;
console.log(str.match(regexp));

const regexp2 = /fox/gi;
//console.log(regexp2.test(str));
console.log(str.replace(regexp2,'AAA'));
console.log(str); //원본은 그대로

console.log(str.match(/\.$/gi)); //null m이 없으면 문자열 자체의 끝을 확인
console.log(str.match(/\.$/gim)); //m은 줄바꿈이 되어 있는 각 줄에서 일치 여부 확인 -> g와 뉘앙스 차이가 있다.

console.log(
  str.match(/d$/gm)
)

console.log(
  str.match(/^t/gmi)
)

console.log(
  str.match(/w../g)
)
console.log(
  str.match(/fox|dog/) // 둘 중 먼저 찾는 것을 반환
)
console.log(
  str.match(/wwa?/g)
)

console.log(
  str.match(/\b\w{2,3}\b/g)
)

console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g)
)

const h = `  the hello   world    !

`
console.log(h.match(/\s/g))
console.log(h.replace(/\s/g,''))

console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)