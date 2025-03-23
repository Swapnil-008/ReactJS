import conf from "../conf/conf.js"
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId })
    {
        try {
            //All the passing argumnets should be in same sequence, sequence of object properties can be change
            const post = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            return post;
        }
        catch (error) {
            console.error("Appwrite service :: createPost :: error: ", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status })
    {
        try {
            const post = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            return post;
        }
        catch (error)
        {
            console.error("Appwrite service :: updatePost :: error: ", error);
        }
    }

    async deletePost(slug)
    {
        try {
            const post = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }
        catch (error)
        {
            console.error("Appwrite service :: deletePost :: error: ", error);
            return false;
        }
    }

    //This is for getting single post having id = slug
    async getPost(slug)
    {
        try{
            const post = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return post;
        }
        catch (error)
        {
            console.log("Appwrite service  :: getPost :: error: ", error)
            return false;
        }
    }

    //For getting all posts we can use listDocuments but it will give all the posts without considering whether it's status is active or not
    //Passing status as a default paramter 
    async getAllPosts(queries = [Query.equal("status", "active")])
    {
        try {
            const posts = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
            return posts;
        }
        catch (error)
        {
            console.log("Appwrite service :: getAllPosts :: error: ", error);
        }
    }

    //File upload service
    async uploadFile(file)
    {
        try {
            const fileUpload = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return fileUpload;
        }
        catch(error)
        {
            console.log("Appwrite service :: uploadFile :: error: ", error);
        }
    }

    async deleteFile(fileId)
    {
        try{
            const fileDelete = await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return fileDelete;
        }
        catch(error)
        {
            console.log("Appwrite service :: deleteFile :: error: ", error);
        }
    }

    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
    }
}

const service = new Service()
export default service