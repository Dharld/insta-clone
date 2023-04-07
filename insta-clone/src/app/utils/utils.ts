import { faker } from '@faker-js/faker';
import { Post } from '../model/post.model';
import { User } from '../model/user.model';

export function createPost(): Post {
  return {
    id: faker.datatype.uuid(),
    user: createUser(),
    created_date: faker.datatype.datetime({
      min: new Date(2020, 0, 1).getTime(),
    }),
    imgUrl: faker.image.sports(640, 640, true),
    number_of_likes: faker.datatype.number(),
    description: faker.lorem.words(30),
    comments: [],
  };
}

export function createUser(): User {
  const sex = faker.name.sexType();
  const firstname = faker.name.firstName(sex);
  const username = faker.internet.userName(firstname);
  return {
    id: faker.datatype.uuid(),
    email: faker.internet.email(firstname),
    username,
    password: faker.internet.password(10),
    profilePic: faker.internet.avatar(),
    is_active: faker.datatype.boolean(),
    sex,
  };
}
