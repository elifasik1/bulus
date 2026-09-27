using Bulus.Domain.Common;

namespace Bulus.Domain.Entities;

public class Message : BaseEntity
{
    public Guid ConversationId { get; private set; }

    public Guid SenderId { get; private set; }

    public string Content { get; private set; } = string.Empty;

    public bool IsRead { get; private set; }

    public Conversation Conversation { get; private set; } = null!;

    public User Sender { get; private set; } = null!;

    private Message()
    {
    }

    public Message(
        Guid conversationId,
        Guid senderId,
        string content)
    {
        Id = Guid.NewGuid();
        ConversationId = conversationId;
        SenderId = senderId;
        Content = content;
        IsRead = false;
        CreatedAt = DateTime.UtcNow;
    }

    public void MarkAsRead()
    {
        IsRead = true;
        UpdatedAt = DateTime.UtcNow;
    }
}