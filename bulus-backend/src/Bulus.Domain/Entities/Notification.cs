using Bulus.Domain.Common;
using Bulus.Domain.Enums;

namespace Bulus.Domain.Entities;

public class Notification : BaseEntity
{
    public Guid UserId { get; private set; }

    public NotificationType Type { get; private set; }

    public string Title { get; private set; } = string.Empty;

    public string? Message { get; private set; }

    public Guid? RelatedEntityId { get; private set; }

    public bool IsRead { get; private set; }

    public User User { get; private set; } = null!;

    private Notification()
    {
    }

    public Notification(
        Guid userId,
        NotificationType type,
        string title,
        string? message = null,
        Guid? relatedEntityId = null)
    {
        Id = Guid.NewGuid();
        UserId = userId;
        Type = type;
        Title = title;
        Message = message;
        RelatedEntityId = relatedEntityId;
        IsRead = false;
        CreatedAt = DateTime.UtcNow;
    }

    public void MarkAsRead()
    {
        IsRead = true;
        UpdatedAt = DateTime.UtcNow;
    }
}