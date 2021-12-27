export function authHeader() {
  // return authorization header with jwt token
  const id_token = localStorage.getItem('token');
  if (id_token) {
    return {
      Authorization: `Bearer ${id_token}`,
      ContentType: 'multipart/form-data',
    };
  }
  return {};
}
