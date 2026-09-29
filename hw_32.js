function createRequest(id) {
   return new Promise((resolve) => {

      setTimeout(() => {
         resolve({ id, title: `Post id: ${id}` })
      }, 1000)
   })
}


function createArrOfPromises() {
   return new Promise((resolve) => {
      const posts = [15, 11, 23, 6, 75, 3, 7];

      const requests = posts.map((post) => createRequest(post));
      Promise.all(requests).then(result =>
         resolve(result)
      )
   })
}

createArrOfPromises()
   .then(res => {
      console.log(res.find(post => post.id === 15).title)
      console.log(res.find(post => post.id === 23).title)
      console.log(res.find(post => post.id === 7).title)
      console.log(res.find(post => post.id === 3).title)
   })
   .catch(err => {
      console.error(`Smth went wrong: ${err} (._.)`)
   })


function createRequest(id) {
   return new Promise((resolve) => {

      setTimeout(() => {
         resolve({ id, title: `Post id: ${id}` })
      }, 1000)
   })
}

async function createArrOfPromises() {
   const posts = [15, 11, 23, 6, 75, 3, 7];

   const response = posts.map((post) => createRequest(post));
   const result = await Promise.all(response);
   return result;
}

createArrOfPromises()
   .then(res => {
      console.log(res.find(post => post.id === 15).title)
      console.log(res.find(post => post.id === 23).title)
      console.log(res.find(post => post.id === 7).title)
      console.log(res.find(post => post.id === 3).title)
   })

