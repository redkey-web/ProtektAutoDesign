import { type User, type InsertUser, type Post, type InsertPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  listPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
  updatePost(slug: string, post: Partial<InsertPost>): Promise<Post | undefined>;
  deletePost(slug: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private posts: Map<string, Post>;

  constructor() {
    this.users = new Map();
    this.posts = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async listPosts(): Promise<Post[]> {
    const posts = Array.from(this.posts.values());
    return posts.sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA;
    });
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return this.posts.get(slug);
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = randomUUID();
    const post: Post = {
      ...insertPost,
      id,
      coverImage: insertPost.coverImage || null,
      tags: insertPost.tags || [],
      publishedAt: insertPost.publishedAt || new Date(),
      updatedAt: insertPost.updatedAt || null,
    };
    this.posts.set(post.slug, post);
    return post;
  }

  async updatePost(slug: string, updates: Partial<InsertPost>): Promise<Post | undefined> {
    const existing = this.posts.get(slug);
    if (!existing) return undefined;

    const updated: Post = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    this.posts.set(slug, updated);
    return updated;
  }

  async deletePost(slug: string): Promise<boolean> {
    return this.posts.delete(slug);
  }
}

export const storage = new MemStorage();
