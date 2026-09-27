using Bulus.Domain.Common;

namespace Bulus.Domain.Entities;

public class ConversationParticipant : BaseEntity
{
    public Guid ConversationId { get; private set; }

    public Guid UserId { get; private set; }

    public Conversation Conversation { get; private set; } = null!;

    public User User { get; private set; } = null!;

    private ConversationParticipant()
    {
    }

    public ConversationParticipant(
        Guid conversationId,
        Guid userId)
    {
        Id = Guid.NewGuid();
        ConversationId = conversationId;
        UserId = userId;
        CreatedAt = DateTime.UtcNow;
    }
}