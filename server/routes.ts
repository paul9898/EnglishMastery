import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static site, no API routes needed for now
  
  const httpServer = createServer(app);

  return httpServer;
}
