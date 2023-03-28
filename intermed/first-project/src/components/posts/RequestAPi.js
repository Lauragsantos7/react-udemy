export const requestAllApis = async () => {
  const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");

  const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postResponse, photoResponse]);

  const resultPost = await posts.json();
  const resultPhoto = await photos.json();

  // retornando as duas apis numa mesma chamada: usei a api post como base, usar o 'cover' e passar a segunda api com o indice- para retornar indice 1 com indice 1... -  e o objeto que dejesa retornar(nesse caso, a url). 
  const postsAndPhotos = resultPost.map((post, index) => {
      return {...post, cover: resultPhoto[index].url }
  });
  return postsAndPhotos;
}
