const checkPhone = function (phone) {
  const regex = /^\d{11}$/
  return regex.test(phone)
}

export default {
  checkPhone
}