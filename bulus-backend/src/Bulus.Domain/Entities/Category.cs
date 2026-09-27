using Bulus.Domain.Common;

namespace Bulus.Domain.Entities;

public class Category : BaseEntity
{
    public string Name { get; private set; } = string.Empty;

    public string Slug { get; private set; } = string.Empty;

    public ICollection<Opportunity> Opportunities { get; private set; } = new List<Opportunity>();

    private Category()
    {
    }

    public Category(string name, string slug)
    {
        Id = Guid.NewGuid();
        Name = name;
        Slug = slug;
        CreatedAt = DateTime.UtcNow;
    }
}