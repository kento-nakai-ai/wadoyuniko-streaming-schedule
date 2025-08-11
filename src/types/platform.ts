// プラットフォーム関連の型定義

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  subscription: SubscriptionPlan;
  preferences: UserPreferences;
  createdAt: Date;
  lastLoginAt?: Date;
}

export type UserRole = 'student' | 'instructor' | 'admin' | 'super_admin';

export type SubscriptionPlan = 'free' | 'basic' | 'pro' | 'enterprise';

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'ja' | 'en';
  notifications: NotificationSettings;
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  inApp: boolean;
  weeklyDigest: boolean;
  courseUpdates: boolean;
  communityMessages: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  category: CourseCategory;
  level: CourseLevel;
  duration: number; // in minutes
  price: number;
  currency: string;
  thumbnail: string;
  previewVideo?: string;
  tags: string[];
  modules: CourseModule[];
  enrollment: EnrollmentStats;
  rating: CourseRating;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CourseCategory = 
  | 'ai-development'
  | 'prompt-engineering'
  | 'claude-code'
  | 'no-code-ai'
  | 'business-automation';

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  quiz?: Quiz;
  duration: number;
  isLocked: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  order: number;
  type: LessonType;
  content: LessonContent;
  duration: number;
  isCompleted: boolean;
}

export type LessonType = 
  | 'video'
  | 'text'
  | 'interactive'
  | 'quiz'
  | 'assignment'
  | 'live-coding';

export interface LessonContent {
  videoUrl?: string;
  transcription?: string;
  slides?: string[];
  codeExamples?: CodeExample[];
  resources?: Resource[];
  exercises?: Exercise[];
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  output?: string;
  explanation: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  initialCode?: string;
  solution: string;
  hints: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'link' | 'file' | 'book' | 'tool';
  url: string;
  isExternal: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number; // in minutes
  passingScore: number;
  attempts: number;
  isRandomized: boolean;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
}

export type QuestionType = 
  | 'multiple-choice'
  | 'multiple-select'
  | 'true-false'
  | 'short-answer'
  | 'code-completion';

export interface EnrollmentStats {
  totalEnrolled: number;
  activeStudents: number;
  completionRate: number;
  averageProgress: number;
}

export interface CourseRating {
  average: number;
  totalReviews: number;
  distribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  progress: CourseProgress;
  startedAt: Date;
  completedAt?: Date;
  certificateIssued: boolean;
}

export interface CourseProgress {
  completedLessons: string[];
  completedModules: string[];
  quizScores: Record<string, number>;
  exerciseCompletions: Record<string, boolean>;
  totalTimeSpent: number; // in minutes
  currentModule: string;
  currentLesson: string;
  progressPercentage: number;
}