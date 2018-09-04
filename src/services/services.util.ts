import { Observable, of } from 'rxjs';

/**
 * Displays the error occurred during the ajax call via any of the services and
 * sends the given default response instead.
 */
export function handleError<T>(operation: string, result: T) {
  return (error: { message: string }): Observable<T> => {
    console.error(`${operation} operation failed: ${error.message}`);
    return of(result);
  };
}
