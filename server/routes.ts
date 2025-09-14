import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertVisitorSchema, insertFeedbackSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Visitor registration endpoint
  app.post("/api/visitors", async (req, res) => {
    try {
      const validatedData = insertVisitorSchema.parse(req.body);
      const visitor = await storage.createVisitor(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Visitor registration successful",
        data: visitor 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to register visitor" 
        });
      }
    }
  });

  // Get all visitors endpoint
  app.get("/api/visitors", async (req, res) => {
    try {
      const visitors = await storage.getVisitors();
      res.json({ success: true, data: visitors });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch visitors" 
      });
    }
  });

  // Feedback submission endpoint
  app.post("/api/feedback", async (req, res) => {
    try {
      const validatedData = insertFeedbackSchema.parse(req.body);
      const feedback = await storage.createFeedback(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Feedback submitted successfully",
        data: feedback 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit feedback" 
        });
      }
    }
  });

  // Get all feedback endpoint
  app.get("/api/feedback", async (req, res) => {
    try {
      const feedback = await storage.getFeedback();
      res.json({ success: true, data: feedback });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch feedback" 
      });
    }
  });

  // Contact message endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully",
        data: message 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Get all contact messages endpoint
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
