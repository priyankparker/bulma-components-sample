function getLastPageNumber(totalLength, firstPageLength, otherPageLength) {
  if (
    !(
      Number.isSafeInteger(totalLength) ||
      Number.isSafeInteger(firstPageLength) ||
      Number.isSafeInteger(otherPageLength)
    )
  ) {
    return
  }
  let result = totalLength - firstPageLength;
  if (result <= 0) {
    return 1;
  }

  result
  result / otherPageLength //?
  return parseInt(
    Math.ceil(result / otherPageLength)
  ) + 1


}

getLastPageNumber(
  100, 23, 13
) //?