/**
 * Преобразует текст в несколько предложений,
 * по умолчанию: 3
 *
 * @param {string} text - текст
 * @param {number} sentence - кол-во предложений, которые нужно вытащить
 * @author Ануфриев Георгий
 * @author github: GeorgyDev11111
 */
function toSliceText (text: string, sentence: number = 3) {

  const regexp = /[!\.\?](?=\s|$|[a-zа-ё])/gi  // (! || . || ? ).(" " || "конец строки" || [алфавит])
  const points = [...text.matchAll(regexp)] // все найденные символы в строке : [[...],[...]]

  if(!points.length) return text // если не было найдено ни одного искомого символа

  const result = [] // результируемый массив предложений : String
  let previous = 0      // предыдущее состояние index (искомого символа)
  for( const { index } of points) {
    result.push(text.slice(previous, index + 1)) // Добавляем по каждому предложению (вырезанному из текста) в массив
    previous = index + 1  // сохраняем текущее состояния в предыдущее
  }

  return result.filter((_,index) => index < sentence ).join("")
}

export default toSliceText
