export function processError(error: any): string {
  // Check if the error comes from an Axios response
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  }
  // Fallback to error.message if available
  if (error.message) {
    return error.message;
  }
  // Default message if no error message exists
  return 'An unexpected error occurred.';
}
