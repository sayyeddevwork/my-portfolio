import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in portfolio application:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback !== undefined) {
        return <>{this.props.fallback}</>;
      }

      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-950 border border-amber-800/80 mx-auto flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">Temporary Application Boundary Exception</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                A component encountered a runtime rendering exception. The error boundary isolated the failure to protect overall page stability.
              </p>
            </div>

            <button
              onClick={this.handleReset}
              id="error-boundary-reload-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const SectionErrorFallback: React.FC<{ label: string }> = ({ label }) => (
  <section className="py-12 bg-slate-950 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-6 rounded-xl bg-slate-900 border border-amber-800/60 text-amber-300 text-sm leading-relaxed" role="alert">
        The {label} section failed to render. Please reload the page.
      </div>
    </div>
  </section>
);
