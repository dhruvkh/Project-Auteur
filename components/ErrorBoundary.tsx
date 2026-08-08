import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  declare state: ErrorBoundaryState;
  declare props: ErrorBoundaryProps;
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log error info here if needed
    // console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Something went wrong.</h1>
          <p className="text-lg text-ink/80 mb-6">An unexpected error occurred. Please refresh the page or try again later.</p>
          <details className="text-sm text-ink/50 whitespace-pre-wrap max-w-xl mx-auto">
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
