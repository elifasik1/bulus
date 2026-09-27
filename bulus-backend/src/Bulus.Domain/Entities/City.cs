using Bulus.Domain.Common;

namespace Bulus.Domain.Entities;

public class City : BaseEntity
{
    public string Name { get; private set; } = string.Empty;

    public string Slug { get; private set; } = string.Empty;

    public ICollection<Profile> Profiles { get; private set; } = new List<Profile>();

    public ICollection<Opportunity> Opportunities { get; private set; } = new List<Opportunity>();

    private City()
    {
    }

    public City(string name, string slug)
    {
        Id = Guid.NewGuid();
        Name = name;
        Slug = slug;
        CreatedAt = DateTime.UtcNow;
    }
}