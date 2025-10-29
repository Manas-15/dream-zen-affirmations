import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/newsletter-subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Thank you for subscribing!",
          description: data.message || "You'll receive daily affirmations in your inbox.",
        });
        setEmail("");
      } else {
        toast({
          title: "Subscription failed",
          description: data.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      toast({
        title: "Something went wrong",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4">
      <div className="gradient-card rounded-2xl p-8 shadow-glow border border-primary/20">
        <h2 className="text-3xl font-semibold text-center mb-4 text-foreground">
          Get Daily Affirmations
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          Start each evening with a peaceful affirmation delivered to your inbox
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-background/50 border-primary/30 focus:border-primary"
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
