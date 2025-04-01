export const handleErrors = (error: any): string => {
  // Handle Zod validation errors
  if (error?.errors && Array.isArray(error.errors)) {
    // @ts-expect-error
    return error.errors.map((err) => `${err.path}: ${err.message}`).join(', ');
  }

  // Handle Axios errors (API responses with structured error messages)
  if (error?.response) {
    if (error.response.data?.message) {
      return error.response.data.message; // API sent a meaningful error message
    }
    if (error.response.data?.errors) {
      return Object.values(error.response.data.errors).flat().join(', ');
    }
  }

  // Handle JavaScript/Server errors (like network failures)
  if (error?.message) {
    return error.message;
  }

  // Default fallback error message
  return 'An unexpected error occurred. Please try again.';
};
