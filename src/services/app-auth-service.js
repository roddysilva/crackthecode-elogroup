export const loadUserData = () => {
  let usuario = localStorage.getItem('user')
  if (usuario == null) {
    return null
  }

  let user = JSON.parse(usuario)

  return user
}

export const saveUserData = userData => {
  console.log('Tentando salvar')
  let userDataStr = JSON.stringify(userData)

  localStorage.setItem('user', userDataStr)
}
