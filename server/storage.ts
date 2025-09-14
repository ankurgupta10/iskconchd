import { type Visitor, type InsertVisitor, type Feedback, type InsertFeedback, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Visitor methods
  createVisitor(visitor: InsertVisitor): Promise<Visitor>;
  getVisitors(): Promise<Visitor[]>;
  
  // Feedback methods
  createFeedback(feedback: InsertFeedback): Promise<Feedback>;
  getFeedback(): Promise<Feedback[]>;
  
  // Contact messages methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private visitors: Map<string, Visitor>;
  private feedback: Map<string, Feedback>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.visitors = new Map();
    this.feedback = new Map();
    this.contactMessages = new Map();
  }

  async createVisitor(insertVisitor: InsertVisitor): Promise<Visitor> {
    const id = randomUUID();
    const visitor: Visitor = { 
      ...insertVisitor,
      id,
      createdAt: new Date(),
      dateOfBirth: insertVisitor.dateOfBirth ?? null,
      gender: insertVisitor.gender ?? null,
      purposeOfVisit: insertVisitor.purposeOfVisit ?? null,
      additionalComments: insertVisitor.additionalComments ?? null,
    };
    this.visitors.set(id, visitor);
    return visitor;
  }

  async getVisitors(): Promise<Visitor[]> {
    return Array.from(this.visitors.values());
  }

  async createFeedback(insertFeedback: InsertFeedback): Promise<Feedback> {
    const id = randomUUID();
    const feedback: Feedback = { 
      ...insertFeedback,
      id,
      createdAt: new Date(),
      email: insertFeedback.email ?? null,
      rating: insertFeedback.rating ?? null,
      suggestions: insertFeedback.suggestions ?? null,
    };
    this.feedback.set(id, feedback);
    return feedback;
  }

  async getFeedback(): Promise<Feedback[]> {
    return Array.from(this.feedback.values());
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
