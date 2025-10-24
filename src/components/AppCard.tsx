import { Star, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AppCardProps {
  name: string;
  developer: string;
  rating: number;
  icon: string;
  downloads?: string;
}

export function AppCard({ name, developer, rating, icon, downloads }: AppCardProps) {
  return (
    <Card className="group overflow-hidden border-0 bg-gradient-to-b from-card to-secondary/20 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-bold text-primary">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
              {developer}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="text-xs font-medium">{rating}</span>
              </div>
              {downloads && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Download className="h-3 w-3" />
                  <span>{downloads}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <Button size="sm" className="w-full mt-3">
          Install
        </Button>
      </CardContent>
    </Card>
  );
}
