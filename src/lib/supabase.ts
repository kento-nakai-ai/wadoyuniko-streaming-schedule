import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          avatar?: string
          role: 'student' | 'instructor' | 'admin' | 'super_admin'
          subscription: 'free' | 'basic' | 'pro' | 'enterprise'
          created_at: string
          last_login_at?: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          avatar?: string
          role?: 'student' | 'instructor' | 'admin' | 'super_admin'
          subscription?: 'free' | 'basic' | 'pro' | 'enterprise'
          created_at?: string
          last_login_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          avatar?: string
          role?: 'student' | 'instructor' | 'admin' | 'super_admin'
          subscription?: 'free' | 'basic' | 'pro' | 'enterprise'
          created_at?: string
          last_login_at?: string
        }
      }
      agents: {
        Row: {
          id: string
          role: string
          name: string
          level: number
          responsibilities: string[]
          authorities: string[]
          reporting_to?: string
          direct_reports?: string[]
          skills: string[]
          is_active: boolean
          last_activity: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          role: string
          name: string
          level: number
          responsibilities: string[]
          authorities: string[]
          reporting_to?: string
          direct_reports?: string[]
          skills: string[]
          is_active?: boolean
          last_activity?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          role?: string
          name?: string
          level?: number
          responsibilities?: string[]
          authorities?: string[]
          reporting_to?: string
          direct_reports?: string[]
          skills?: string[]
          is_active?: boolean
          last_activity?: string
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          title: string
          description: string
          assigned_to: string
          created_by: string
          priority: 'P0' | 'P1' | 'P2' | 'P3'
          status: 'pending' | 'in_progress' | 'completed' | 'blocked'
          estimated_hours?: number
          actual_hours?: number
          due_date?: string
          created_at: string
          updated_at: string
          dependencies?: string[]
          tags: string[]
        }
        Insert: {
          id?: string
          title: string
          description: string
          assigned_to: string
          created_by: string
          priority: 'P0' | 'P1' | 'P2' | 'P3'
          status?: 'pending' | 'in_progress' | 'completed' | 'blocked'
          estimated_hours?: number
          actual_hours?: number
          due_date?: string
          created_at?: string
          updated_at?: string
          dependencies?: string[]
          tags?: string[]
        }
        Update: {
          id?: string
          title?: string
          description?: string
          assigned_to?: string
          created_by?: string
          priority?: 'P0' | 'P1' | 'P2' | 'P3'
          status?: 'pending' | 'in_progress' | 'completed' | 'blocked'
          estimated_hours?: number
          actual_hours?: number
          due_date?: string
          created_at?: string
          updated_at?: string
          dependencies?: string[]
          tags?: string[]
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          instructor_id: string
          category: string
          level: 'beginner' | 'intermediate' | 'advanced'
          duration: number
          price: number
          currency: string
          thumbnail: string
          preview_video?: string
          tags: string[]
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          instructor_id: string
          category: string
          level: 'beginner' | 'intermediate' | 'advanced'
          duration: number
          price: number
          currency: string
          thumbnail: string
          preview_video?: string
          tags?: string[]
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          instructor_id?: string
          category?: string
          level?: 'beginner' | 'intermediate' | 'advanced'
          duration?: number
          price?: number
          currency?: string
          thumbnail?: string
          preview_video?: string
          tags?: string[]
          is_published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}