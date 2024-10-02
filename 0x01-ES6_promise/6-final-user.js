// import from 4-user-promise and 5-photo-reject
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, photo) {
  // Returns the promise
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(photo)])
    .then((results) => results.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : reason.toString(),
    })));
}
