const checkPhone = function (phone) {
  console.log('------checkPhone-----')
  const regex = /\d{11}/
  return regex.test(phone)
}

export default {
  checkPhone
}