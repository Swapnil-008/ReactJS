// This file is defined for exporting environment variables to avoid unnecessary changes, such as an ID being interpreted as a number instead of a string.
const config = {
    // Your configuration here
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),   
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID) ,
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config