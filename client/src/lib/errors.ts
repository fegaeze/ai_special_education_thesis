// Error Types
export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details?: any;
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

// Error Classes
export class AppError extends Error {
  public status: number;
  public code?: string;
  public details?: any;

  constructor(
    message: string,
    status: number = 500,
    code?: string,
    details?: any,
  ) {
    super(message);
    this.name = "AppError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export class ValidationError extends Error {
  public field: string;
  public value?: any;

  constructor(field: string, message: string, value?: any) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.value = value;
  }
}

// Error Handling Utilities
export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof AppError) {
    return {
      status: error.status,
      message: error.message,
      code: error.code,
      details: error.details,
    };
  }

  if (error instanceof Error) {
    return {
      status: 500,
      message: error.message,
    };
  }

  return {
    status: 500,
    message: "An unexpected error occurred",
  };
};

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "message" in error
  );
};

// ============================================================================
// CENTRALIZED ERROR MESSAGES
// ============================================================================

// API Error Messages
export const API_ERRORS = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NOT_FOUND: "The requested resource was not found.",
  VALIDATION_ERROR: "Please check your input and try again.",
  SERVER_ERROR: "Server error. Please try again later.",
  UNKNOWN_ERROR: "An unexpected error occurred.",
  NOT_AUTHENTICATED: "Not authenticated",
  HTTP_ERROR: "HTTP error! status: {status}",
} as const;

// Authentication Error Messages
export const AUTH_ERRORS = {
  LOGIN_FAILED: "We couldn't log you in. Please try again.",
  LOGIN_NETWORK_ERROR: "Login failed. Please try again.",
  REGISTER_FAILED: "We couldn't register you. Please try again.",
  REGISTER_NETWORK_ERROR: "Registration failed. Please try again.",
  NOT_LOGGED_IN: "You are not logged in.",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Login successful!",
  REGISTER_SUCCESS: "Registration successful! Redirecting to login...",
  LOGOUT_SUCCESS: "Logged out successfully",
  CLASS_CREATED: "Class created successfully!",
  STUDENTS_UPLOADED: "Uploaded {count} students",
} as const;

// Form Validation Messages
export const VALIDATION_MESSAGES = {
  EMAIL_INVALID: "Invalid email address",
  PASSWORD_REQUIRED: "Password is required",
  PASSWORD_MIN_LENGTH: "Password must be at least 8 characters",
  CONFIRM_PASSWORD_REQUIRED: "Please confirm your password",
  PASSWORDS_DONT_MATCH: "Passwords do not match",
  FULL_NAME_REQUIRED: "Full name is required",
  STUDENTS_REQUIRED: "Please add at least one student",
  CSV_FILE_REQUIRED: "Please upload a CSV file",
  HEADER_NOT_FOUND: "Please make sure the first column has the header 'name'",
  NO_VALID_STUDENTS: "No valid student names found in CSV",
  CSV_PARSE_ERROR: "Failed to parse CSV file",
} as const;

// Data Fetching Error Messages
export const FETCH_ERRORS = {
  CLASSES_FETCH: "We were unable to fetch your classes",
  STUDENTS_FETCH: "Failed to fetch students",
  PROBLEMS_FETCH: "Failed to fetch problems",
  STATS_FETCH: "Failed to fetch statistics",
  PROBLEM_FETCH: "Failed to fetch problem",
  ANALYTICS_FETCH: "Failed to fetch analytics data",
  CLASS_CREATE: "Failed to create class.",
  CLASS_CREATE_RETRY: "Failed to create class. Please try again.",
} as const;

// Loading Messages
export const LOADING_MESSAGES = {
  CLASSES_LOADING: "Loading classes...",
  PROBLEMS_LOADING: "Loading problems...",
  STUDENTS_LOADING: "Loading students...",
} as const;

// UI Messages
export const UI_MESSAGES = {
  UNEXPECTED_ERROR: "An unexpected error occurred. Please try again.",
  ERROR_FALLBACK: "Something went wrong. Please try refreshing the page.",
} as const;

// Configuration Error Messages
export const CONFIG_ERRORS = {
  MISSING_API_URL: "NEXT_PUBLIC_API_URL environment variable is required",
} as const;

// ============================================================================
// LEGACY SUPPORT (for backward compatibility)
// ============================================================================

// Legacy error messages (for backward compatibility)
export const ERROR_FETCH_CLASSES = FETCH_ERRORS.CLASSES_FETCH;

// Legacy error messages object (for backward compatibility)
export const ERROR_MESSAGES = {
  NETWORK_ERROR: API_ERRORS.NETWORK_ERROR,
  UNAUTHORIZED: API_ERRORS.UNAUTHORIZED,
  NOT_FOUND: API_ERRORS.NOT_FOUND,
  VALIDATION_ERROR: API_ERRORS.VALIDATION_ERROR,
  SERVER_ERROR: API_ERRORS.SERVER_ERROR,
  UNKNOWN_ERROR: API_ERRORS.UNKNOWN_ERROR,
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Helper function to format messages with placeholders
export const formatMessage = (
  message: string,
  replacements: Record<string, string | number>,
): string => {
  return message.replace(/\{(\w+)\}/g, (match, key) => {
    return replacements[key]?.toString() || match;
  });
};

// Helper function to get error message with fallback
export const getErrorMessage = (error: unknown, fallback?: string): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return fallback || API_ERRORS.UNKNOWN_ERROR;
};
