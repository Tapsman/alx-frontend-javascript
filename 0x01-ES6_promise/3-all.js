// Import './utils'
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
