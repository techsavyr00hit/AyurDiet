import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye } from "lucide-react";

type DietChartCardProps = {
  id: string;
  title: string;
  date: string;
  meals: number;
  dosha?: string;
  onView: (id: string) => void;
};

export default function DietChartCard({ id, title, date, meals, dosha, onView }: DietChartCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-diet-chart-${id}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <Calendar className="h-3 w-3" />
              {date}
            </CardDescription>
          </div>
          {dosha && (
            <Badge variant="secondary" data-testid={`badge-dosha-${id}`}>
              {dosha}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{meals} meals planned</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full gap-2" onClick={() => onView(id)} data-testid={`button-view-chart-${id}`}>
          <Eye className="h-4 w-4" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
