const users = [
  {id: 1,name: "clario"},
  {id: 2,name: "asd"},
  {id: 3,name: "fgd"},
  {id: 4,name: "bruce"},
]

const posts = [
  {id: 1, title: "title 1", body: ".....", userId: 3},
  {id: 2, title: "title 2", body: ".....", userId: 2},
  {id: 3, title: "title 3", body: ".....", userId: 1},
  {id: 4, title: "title 4", body: ".....", userId: 2},
  {id: 5, title: "title 5", body: ".....", userId: 3},
]

export const getPosts = async () => {
  return posts;
}

export const getPost = async (id) => {
  return posts.find(p => p.id == id);
}

export const getUser = async (id) => {
  return users.find(u => u.id == id)
}