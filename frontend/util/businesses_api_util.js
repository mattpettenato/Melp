export const fetchBusinesses = (data) => {
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


// export const fetchBusinesses = () => {
//   return $.ajax({
//     url: `/api/businesses`,
//     method: `GET`,
//   })
// }

export const searchBusinesses = (search) => {
  return $.ajax({
    method: "GET",
    url: "/api/businesses",
    data: { search },
  });
};

export const createBusiness = business => {
  return $.ajax({
    method: 'POST',
    url: '/api/businesss',
    data: business,
    contentType: false,
    processData: false
  })
}

export const clearBusiness = businessId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/businesses/${businessId}`
  })
)