import setCookie from "./Set_Cookie"

export default function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }