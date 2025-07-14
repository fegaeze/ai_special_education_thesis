export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  return !!token;
};

export const logout = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
}; 