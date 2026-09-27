using Bulus.Domain.Common;

namespace Bulus.Domain.Entities;

public class SavedItem : BaseEntity
{
    public Guid UserId { get; private set; }

    public Guid OpportunityId { get; private set; }

    public User User { get; private set; } = null!;

    public Opportunity Opportunity { get; private set; } = null!;

    private SavedItem()
    {
    }

    public SavedItem(Guid userId, Guid opportunityId)
    {
        Id = Guid.NewGuid();
        UserId = userId;
        OpportunityId = opportunityId;
        CreatedAt = DateTime.UtcNow;
    }
}