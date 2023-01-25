# Functions

This package uses [lazyedge](https://github.com/julipup/lazyedge) to develop, test, bundle and deploy functions to Knative instance on a kubernetes cluster. 

# Routes

This section contains some kind of a documentation on functions, their routes and on what they do.

- **routes/generate_token**

    **Route**: [https://generate-token.mishok.func.odzi.dog](https://generate-token.mishok.func.odzi.dog)   
    **State**: *working*    
    **Method**: *POST*  

    This function is intended to create different kinds of tokens. Currently it supports creation of *auth* tokens with custom payload, which is used to create new posts using **routes/posts/create** route.

    Request is required to have *authorization* header with content like "Bearer <admin-token>", where <admin-token> is a JWT with payload `{ email: string, password: string }` and secret key. [There is a schema object](https://github.com/odzi-dog/mishok/blob/main/packages/functions/routes/generate_token.ts#L11), that defines request's body structure

- **routes/posts/create**

    **Route**: [https://create-post.mishok.func.odzi.dog](https://create-post.mishok.func.odzi.dog)     
    **State**: *WIP*    
    **Method**: *POST*      

    With this function you'll be able to add new posts to mishok's database.

    Request is required to have *authorization* header with token, that was created using **routes/generate_token** function. There [is also a schema object](https://github.com/odzi-dog/mishok/blob/main/packages/functions/routes/scrapper/create_post.ts#L10), that describes possible body content.
