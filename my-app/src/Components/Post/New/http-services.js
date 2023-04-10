const BASE_URL=process.env.NODE_API;


export function getAllPost(){
    return fetch(`${BASE_URL}/postes`)
    .then(res=>res.json())
    .catch(ree => alert(err.message));

}

export function addNewPost(post){
    return fetch (`${BASE_URL}/post`, {
        method:"POSt",
    body:post  
   })
}