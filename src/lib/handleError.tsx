export const handleErrors = (error: any): string => {
  // Handle Zod validation errors
  if (error?.errors && Array.isArray(error.errors)) {
    return error.errors.map((err: any) => `${err.path}: ${err.message}`).join(', ');
  }

  // Handle Axios errors (API responses with structured error messages)
  if (error?.response) {
    // Handle response.data.message
    if (error.response.data?.message) {
      return error.response.data.message;
    }

    // Handle response.data.errors as an array of objects with path and message
    if (error.response.data?.errors && Array.isArray(error.response.data.errors)) {
      return error.response.data.errors.map((err: any) => `${err.path}: ${err.message}`).join(', ');
    }

    // Handle response.data.errors as an object with key-value pairs
    if (error.response.data?.errors && typeof error.response.data.errors === 'object') {
      return Object.values(error.response.data.errors).flat().join(', ');
    }

    // If there's a response status but no structured error, use statusText
    if (error.response.status && error.response.statusText) {
      return `Error ${error.response.status}: ${error.response.statusText}`;
    }
  }

  // Handle data property directly in the error (specific to your API response structure)
  if (error?.data?.errors && Array.isArray(error.data.errors)) {
    return error.data.errors.map((err: any) => `${err.path}: ${err.message}`).join(', ');
  }

  // Handle JavaScript/Server errors (like network failures)
  if (error?.message && typeof error.message === 'string') {
    return error.message;
  }

  // Default fallback error message
  return 'An unexpected error occurred. Please try again.';
};
