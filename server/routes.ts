import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPostSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await storage.listPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });

  app.get("/api/posts/:slug", async (req, res) => {
    try {
      const post = await storage.getPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  app.post("/api/posts", async (req, res) => {
    try {
      const validated = insertPostSchema.parse(req.body);
      const post = await storage.createPost(validated);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid post data" });
    }
  });

  app.patch("/api/posts/:slug", async (req, res) => {
    try {
      // Validate request body using partial schema (allows partial updates)
      const validated = insertPostSchema.partial().parse(req.body);
      const post = await storage.updatePost(req.params.slug, validated);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: "Invalid post data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update post" });
    }
  });

  app.delete("/api/posts/:slug", async (req, res) => {
    try {
      const deleted = await storage.deletePost(req.params.slug);
      if (!deleted) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete post" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
