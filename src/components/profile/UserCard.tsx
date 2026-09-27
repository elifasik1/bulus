import type { UserCardData } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
import { MapPin, Star, Heart } from "lucide-react";

interface UserCardProps {
  user: UserCardData;
  className?: string;
}

export default function UserCard({ user, className = "" }: UserCardProps) {
  return (
    <Card hover padding="md" className={className}>
      <div className="flex items-start gap-3 mb-3">
        <Avatar src={user.avatar} alt={user.name} size="lg" />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-plum-700">{user.name}</h3>
          {user.location && (
            <span className="inline-flex items-center gap-1 text-xs text-muted mt-0.5">
              <MapPin size={12} />
              {user.location}
            </span>
          )}
          {user.university && (
            <p className="text-xs text-muted">{user.university}</p>
          )}
        </div>
      </div>

      <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-3">
        {user.bio}
      </p>

      <div className="flex items-center gap-4 mb-3 text-xs text-muted">
        <span className="inline-flex items-center gap-1">
          <Heart size={14} className="text-peach-400" />
          {user.helpCount} yardım
        </span>
        <span className="inline-flex items-center gap-1">
          <Star size={14} className="text-peach-400" />
          {user.trustScore.toFixed(1)} güven
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {user.skills.slice(0, 5).map((skill) => (
          <Badge key={skill} variant="muted">
            {skill}
          </Badge>
        ))}
        {user.skills.length > 5 && (
          <Badge variant="muted">+{user.skills.length - 5}</Badge>
        )}
      </div>
    </Card>
  );
}
