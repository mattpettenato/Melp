export const fetchUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  })
)

export const patchUser = (userId, user) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    data: { user }
  })
)

export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: `api/users`
  })
)
