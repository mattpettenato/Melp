export const fetchAllBusinesses = (data) => {
  return $.ajax({
    method: "GET",
    url: "api/businesses",
    data
  })
}

export const fetchBusiness = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/businesses/${id}`
  })
}


export const fetchBusinesses = () => {
  return $.ajax({
    url: `/api/businesses`,
    method: `GET`,
  })
}