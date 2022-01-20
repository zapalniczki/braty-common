const getObjectEntries = (obj: Record<string, any>) => {
  var ownProps = Object.keys(obj),
    i = ownProps.length,
    resArray = new Array(i)
  while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]]

  return resArray
}

export default getObjectEntries
