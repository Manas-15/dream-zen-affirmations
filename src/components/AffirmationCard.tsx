import { Card } from "@/components/ui/card";

interface AffirmationCardProps {
  text: string;
  delay?: number;
}

const AffirmationCard = ({ text, delay = 0 }: AffirmationCardProps) => {
  return (
    <Card 
      className="p-6 gradient-card shadow-soft hover:shadow-glow transition-all duration-500 border-primary/10 animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-foreground/90 text-center leading-relaxed">
        "{text}"
      </p>
    </Card>
  );
};

export default AffirmationCard;
