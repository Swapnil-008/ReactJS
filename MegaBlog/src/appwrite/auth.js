import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";
console.log("Appwrite Config:", conf);
//whenever we have to use this class, we have to create the object of class so instead of exporting class we are exporting class's object
// and all the methods are aplicable on account only that's why we have to create account
export class AuthService {
    client = new Client()
    account;
    //we are defining account in constructor, because we need account when we have object
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    //here we are using async keyword because we don't want to proceed further until the account has created
    async createAccount({email, password, name})
    {
        //This account creation can be failed, so we are keeping that in try and catch block 
        try {
            //we have to pass first 3 parameters in sequence as mentioned in documentation  and the sequence is uniqueId, email, password and then you can pass any other paramters also
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount)
            {
                //call another method, if userAccount is exist then the account should login
                return this.login({email, password})
            }
            else{
                return null
            }
        }
        catch (error)
        {
            throw error;
        }
    }

    async login({email, password})
    {
        try{
            return await this.account.createEmailPasswordSession(email, password)
        }
        catch(error)
        {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("User data:", user);
            return user;
        } catch (error)
        {
            console.error("Failed to get user:", error.message);
            return null;
        }
    }
    

    async logout()
    {
        //This will logout the user from all the locations 
        try{
            await this.account.deleteSessions()
        }
        catch(error)
        {
            throw error
        }
    }
} 

const authService = new AuthService()

export default authService 