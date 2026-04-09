export const conf = {
  appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECTID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASEID),
  appwriteCollectionProfile: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_PROFILE
  ),
  appwriteCollectionProject: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_PROJECT
  ),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKETID),
};
