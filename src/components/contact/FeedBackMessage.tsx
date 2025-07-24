type FeedbackMessageProps = {
  text: string;
  type: "success" | "error";
  isMobile?: boolean;
};

export const FeedbackMessage = ({ text, type }: FeedbackMessageProps) => {
  const baseClass = "absolute -bottom-8 text-sm font-medium text-center";
  const colorClass = type === "success" ? "text-green-600" : "text-red-600";

  return <p className={`${baseClass} ${colorClass}`}>{text}</p>;
};
