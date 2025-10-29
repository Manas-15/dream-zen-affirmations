import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const DailyAffirmation = () => {
  const [dailyAffirmation, setDailyAffirmation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAffirmation = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-affirmation`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to generate affirmation');
        }

        const data = await response.json();
        setDailyAffirmation(data.affirmation);
      } catch (error) {
        console.error('Error fetching affirmation:', error);
        toast({
          title: "Could not load today's affirmation",
          description: "Please try refreshing the page.",
          variant: "destructive",
        });
        // Fallback affirmation
        setDailyAffirmation("I release all tension from my body and mind as I prepare for peaceful rest");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAffirmation();
  }, [toast]);

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
        Today's Affirmation
      </h2>
      <Card className="gradient-accent p-12 shadow-glow border-none animate-float">
        {isLoading ? (
          <div className="text-2xl md:text-3xl text-primary-foreground text-center leading-relaxed font-light animate-pulse">
            Generating your peaceful affirmation...
          </div>
        ) : (
          <p className="text-2xl md:text-3xl text-primary-foreground text-center leading-relaxed font-light">
            "{dailyAffirmation}"
          </p>
        )}
      </Card>
    </section>
  );
};

export default DailyAffirmation;
