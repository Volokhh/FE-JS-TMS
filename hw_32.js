
const postId = [15, 23, 7, 3];

const arrOfPromises = postId.map(id => {
   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
      if (!response.ok) {
         throw new Error('Request failed')
      }

      return response.json();
   });
});

Promise.all(arrOfPromises)
   .then(res => {
      res.forEach(post => {
         console.log(post.id + ' ' + post.title)
      })
   })
   .catch(err => {
      console.error(`Smth went wrong: ${err}(._.)`)
   })


async function loadPosts() {
   const posts = await Promise.all(postId.map(async id => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      return response.json()
   })
   );

   posts.forEach(post => console.log(post.id + ' ' + post.title))
}

loadPosts()

