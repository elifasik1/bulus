import type { OpportunityCardData } from "@/types";
import { OPPORTUNITY_CATEGORIES } from "@/constants";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
import { MapPin, Clock } from "lucide-react";

interface OpportunityCardProps {
  opportunity: OpportunityCardData;
  className?: string;
}

export default function OpportunityCard({ opportunity, className = "" }: OpportunityCardProps) {
  const category = OPPORTUNITY_CATEGORIES.find((c) => c.slug === opportunity.category);

  return (
    <Card hover padding="md" className={className}>
      <div className="flex items-start gap-3 mb-3">
        <Avatar
          src={opportunity.author.avatar}
          alt={opportunity.author.name}
          size="md"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-plum-700">
              {opportunity.author.name}
            </span>
            {opportunity.author.university && (
              <span className="text-xs text-muted">
                {opportunity.author.university}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-0.5 text-xs text-muted">
            {opportunity.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} />
                {opportunity.location}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {opportunity.createdAt}
            </span>
          </div>
        </div>
        <Badge variant={opportunity.type === "offer" ? "sage" : "lilac"}>
          {opportunity.type === "offer" ? "Sunuyor" : "Arıyor"}
        </Badge>
      </div>

      <h3 className="font-semibold text-plum-700 mb-2 leading-snug">
        {opportunity.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-3">
        {opportunity.description}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        {category && (
          <Badge variant="plum">{category.label}</Badge>
        )}
        {opportunity.tags?.map((tag) => (
          <Badge key={tag} variant="muted">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
