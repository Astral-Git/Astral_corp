import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, BarChart3, Target, Sparkles } from "lucide-react";

interface Question {
  id: number;
  text: string;
  category: 'awareness' | 'positioning' | 'voice' | 'visual' | 'consistency';
}

const questions: Question[] = [
  { id: 1, text: "How clear is your brand's mission statement?", category: 'awareness' },
  { id: 2, text: "How well do you know your target audience?", category: 'awareness' },
  { id: 3, text: "How unique is your brand positioning in the market?", category: 'positioning' },
  { id: 4, text: "How consistent is your brand message across platforms?", category: 'positioning' },
  { id: 5, text: "How distinct is your brand's voice and tone?", category: 'voice' },
  { id: 6, text: "How engaging is your brand's communication style?", category: 'voice' },
  { id: 7, text: "How memorable is your brand's visual identity?", category: 'visual' },
  { id: 8, text: "How professional does your brand appear?", category: 'visual' },
  { id: 9, text: "How consistent are your brand colors and fonts?", category: 'consistency' },
  { id: 10, text: "How cohesive is your brand across all touchpoints?", category: 'consistency' },
  { id: 11, text: "How well does your brand story connect emotionally?", category: 'awareness' },
  { id: 12, text: "How competitive is your brand against rivals?", category: 'positioning' },
  { id: 13, text: "How authentic does your brand voice sound?", category: 'voice' },
  { id: 14, text: "How modern and relevant is your visual design?", category: 'visual' },
  { id: 15, text: "How recognizable is your brand at first glance?", category: 'consistency' },
  { id: 16, text: "How clear are your brand values to customers?", category: 'awareness' },
  { id: 17, text: "How differentiated is your brand from competitors?", category: 'positioning' },
  { id: 18, text: "How confident does your brand communication sound?", category: 'voice' },
  { id: 19, text: "How appealing is your brand's aesthetic appeal?", category: 'visual' },
  { id: 20, text: "How unified is your brand experience overall?", category: 'consistency' },
];

const BrandAnalysisQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: number, value: number[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value[0] }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
      setTimeout(() => setShowResults(true), 1000);
    }
  };

  const calculateScore = () => {
    const totalQuestions = questions.length;
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = totalQuestions * 10;
    return Math.round((totalScore / maxScore) * 100);
  };

  const getCategoryScores = () => {
    const categories = ['awareness', 'positioning', 'voice', 'visual', 'consistency'] as const;
    const categoryScores: Record<string, { score: number; label: string }> = {};

    categories.forEach(category => {
      const categoryQuestions = questions.filter(q => q.category === category);
      const categoryAnswers = categoryQuestions
        .map(q => answers[q.id] || 0)
        .reduce((sum, score) => sum + score, 0);
      const categoryScore = Math.round((categoryAnswers / (categoryQuestions.length * 10)) * 100);
      
      const labels = {
        awareness: 'Brand Awareness',
        positioning: 'Market Position',
        voice: 'Brand Voice',
        visual: 'Visual Identity', 
        consistency: 'Brand Consistency'
      };

      categoryScores[category] = { score: categoryScore, label: labels[category] };
    });

    return categoryScores;
  };

  const getScoreDescription = (score: number) => {
    if (score >= 80) return { level: "Excellent", color: "text-green-500", description: "Your brand is strong and well-positioned!" };
    if (score >= 60) return { level: "Good", color: "text-blue-500", description: "Your brand has solid foundations with room for improvement." };
    if (score >= 40) return { level: "Fair", color: "text-yellow-500", description: "Your brand needs some strategic attention." };
    return { level: "Needs Work", color: "text-red-500", description: "Let's rebuild your brand from the ground up!" };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
    setShowResults(false);
  };

  if (isCompleted && showResults) {
    const overallScore = calculateScore();
    const categoryScores = getCategoryScores();
    const scoreDescription = getScoreDescription(overallScore);

    return (
      <section className="py-24 relative overflow-hidden dark:bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#B8860B] to-[#FFD700] rounded-full flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
                Your Brand <span className="gradient-text">Analysis</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Here's how your brand performed across key areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Overall Score */}
              <Card className="glass-card border-white/10 backdrop-blur-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-space gradient-text">Overall Score</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-6xl font-bold mb-4 gradient-text">
                    {overallScore}%
                  </div>
                  <div className={`text-xl font-semibold mb-2 ${scoreDescription.color}`}>
                    {scoreDescription.level}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {scoreDescription.description}
                  </p>
                </CardContent>
              </Card>

              {/* Category Breakdown */}
              <Card className="glass-card border-white/10 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-space gradient-text">Category Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(categoryScores).map(([category, data]) => (
                      <div key={category} className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {data.label}
                        </span>
                        <span className="text-sm font-bold gradient-text">
                          {data.score}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-space font-bold mb-6">
                Ready to <span className="gradient-text">Strengthen</span> Your Brand?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Based on your analysis, we can help you build a stronger brand voice and identity that resonates with your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="hero"
                  className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    document.getElementById('appointment-booking')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Get Your Brand Strategy
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={resetQuiz}
                  className="text-lg px-8 py-6 rounded-full border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (isCompleted) {
    return (
      <section className="py-24 relative overflow-hidden dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#B8860B] to-[#FFD700] rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl font-space font-bold mb-4">
              <span className="gradient-text">Analyzing</span> Your Brand...
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Processing your responses to generate your personalized brand report.
            </p>
            <div className="mt-8">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-[#B8860B] to-[#FFD700] h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQ.id] || 5;

  return (
    <section className="py-24 relative overflow-hidden dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              <span className="gradient-text">5-Minute</span> Brand Checkup
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Answer 20 quick questions to analyze your brand strength and get personalized recommendations.
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
              <motion.div
                className="bg-gradient-to-r from-[#B8860B] to-[#FFD700] h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass-card border-white/10 backdrop-blur-xl p-8">
                <CardContent className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-space font-semibold mb-6 text-gray-800 dark:text-white">
                      {currentQ.text}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                    
                    <Slider
                      value={[currentAnswer]}
                      onValueChange={(value) => handleAnswerChange(currentQ.id, value)}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    
                    <div className="text-center">
                      <span className="text-lg font-semibold gradient-text">
                        {currentAnswer}/10
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center pt-6">
                    <Button
                      onClick={nextQuestion}
                      size="lg"
                      className="bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-white hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full"
                    >
                      {currentQuestion === questions.length - 1 ? "Get My Results" : "Next Question"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BrandAnalysisQuiz;