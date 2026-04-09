import { Client, Databases, Storage, ID, Query } from "appwrite";
import { conf } from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndpoint)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //create the post // document for project
  async createProject({
    slug,
    title,
    description,
    status,
    imageId,
    github,
    projectId,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionProject,
        slug,
        {
          title,
          description,
          status,
          imageId,
          github,
          projectId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createProject :: Error", error);
    }
  }
  //create the post // document for profile
  async createProfile({ userId, username, email, imageId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionProfile,
        userId,
        {
          userId,
          username,
          email,
          imageId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: createProject :: Error", error);
    }
  }

  //update project
  async updateProject(slug, { title, description, status, imageId, github }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionProject,
        slug,
        {
          title,
          description,
          status,
          imageId,
          github,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: updateProject :: Error", error);
    }
  }
  //update profile
  async updateProfile(userId, { username, email, imageId }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionProfile,
        userId,
        { username, email, imageId }
      );
    } catch (error) {
      console.log("Appwrite Service :: updateProject :: Error", error);
    }
  }

  ///delete post / document of project
  async deleteProject(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionProject,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: deleteProject :: Error", error);
      return false;
    }
  }

  //get post / project
  async getProject(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionProject,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getProject :: Error", error);
      return false;
    }
  }

  //get all post / projects
  async getProjects(queries = [Query.equal("status", "active")]) {
    try {
      return this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionProject,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getProjects :: error", error);
      return false;
    }
  }

  //upload the project image from storage
  async uploadProjectImage(image) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        image
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadProjectImage :: Error", error);
      return false;
    }
  }
  //upload the profile image from storage
  async uploadProfileImage(image) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        image
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadProfileImage :: Error", error);
      return false;
    }
  }

  //get profile
  async getProfile() {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionProfile,
        userId
      );
    } catch (error) {
      console.log("Appwrite Service :: getProfile :: Error", error);
      return false;
    }
  }

  //delete the project image
  async deleteProjectImage(imageId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, imageId);
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteProjectImage  :: Error", error);
      return false;
    }
  }

  //get file view
  getFileView(imageId) {
    try {
      return this.bucket.getFileView(conf.appwriteBucketId, imageId);
    } catch (error) {
      console.log("Appwrite Service :: getFileView :: Error", error);
      return false;
    }
  }
}

const appwriteService = new Service();

export default appwriteService;
