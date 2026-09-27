using Bulus.Domain.Common;

namespace Bulus.Domain.Entities;

public class Conversation : BaseEntity
{
    public ICollection<ConversationParticipant> Participants { get; private set; }
        = new List<ConversationParticipant>();

    public ICollection<Message> Messages { get; private set; }
        = new List<Message>();

    private Conversation()
    {
    }

    public static Conversation Create()
    {
        return new Conversation
        {
            Id = Guid.NewGuid(),
            CreatedAt = DateTime.UtcNow
        };
    }
}