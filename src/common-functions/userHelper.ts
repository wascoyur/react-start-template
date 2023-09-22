import { ExternalUserProfile, userProfile } from 'src/types/userProfile';
import { generateLoremIpsum } from 'src/common-functions/loremHelper';

export const createUserHelper = (data: ExternalUserProfile): userProfile => {
  const count = Math.floor(Math.random() * 20) + 5;
  let user = {} as userProfile;
  user = {
    address: {
      city: data.address.city,
      geo: { lat: data.address.coordinates.lat, lng: data.address.coordinates.lng },
      street: data.address.address,
      suite: '',
      zipcode: data.address.postalCode,
    },
    company: { bs: data.company.department, catchPhrase: '', name: data.company.title },
    email: data.email,
    id: data.id,
    phone: data.phone,
    username: data.username,
    website: '',
    name: data.firstName,
    about: generateLoremIpsum(count),
  };
  return user;
};
