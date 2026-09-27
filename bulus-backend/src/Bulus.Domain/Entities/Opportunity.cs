using Bulus.Domain.Common;
using Bulus.Domain.Enums;

namespace Bulus.Domain.Entities;

public class Opportunity : BaseEntity
{
    public Guid UserId { get; private set; }

    public string Title { get; private set; } = string.Empty;

    public string Description { get; private set; } = string.Empty;

    public OpportunityType Type { get; private set; }

    public Guid CategoryId { get; private set; }

    public Guid CityId { get; private set; }

    public bool IsActive { get; private set; } = true;

    public User User { get; private set; } = null!;

    public Category Category { get; private set; } = null!;

    public City City { get; private set; } = null!;
    
    public ICollection<SavedItem> SavedItems { get; private set; }
    = new List<SavedItem>();


    private Opportunity()
    {
    }

    public Opportunity(
        Guid userId,
        string title,
        string description,
        OpportunityType type,
        Guid categoryId,
        Guid cityId)
    {
        Id = Guid.NewGuid();
        UserId = userId;
        Title = title;
        Description = description;
        Type = type;
        CategoryId = categoryId;
        CityId = cityId;
        IsActive = true;
        CreatedAt = DateTime.UtcNow;
    }

    public void Update(
        string title,
        string description,
        OpportunityType type,
        Guid categoryId,
        Guid cityId)
    {
        Title = title;
        Description = description;
        Type = type;
        CategoryId = categoryId;
        CityId = cityId;
        UpdatedAt = DateTime.UtcNow;
    }

    public void Deactivate()
    {
        IsActive = false;
        UpdatedAt = DateTime.UtcNow;
    }

    public void Activate()
    {
        IsActive = true;
        UpdatedAt = DateTime.UtcNow;
    }
}
