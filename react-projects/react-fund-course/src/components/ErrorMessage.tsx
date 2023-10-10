interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p className="text-center text-red-600">{error}</p>;
};

export default ErrorMessage;
