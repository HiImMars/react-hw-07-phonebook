const BASE_URL = 'https://654bdb4e5b38a59f28efcff1.mockapi.io';

export const getContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);
  return await response.json();
};

export const createContact = async data => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const deleteContact = async id => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`);
  return await response.json();
};
