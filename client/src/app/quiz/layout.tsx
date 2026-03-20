import QuizBackgroundDecor from "./components/QuizBackgroundDecor";
import { QuizProvider } from "@/contexts/QuizContext";

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
        <QuizBackgroundDecor />
        {children}
      </div>
    </QuizProvider>
  );
}
