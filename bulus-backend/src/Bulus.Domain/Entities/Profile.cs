using Bulus.Domain.Common;

namespace Bulus.Domain.Entities;

public class Profile : BaseEntity
{
    public Guid UserId { get; private set; }

    public string FirstName { get; private set; } = string.Empty;

    public string LastName { get; private set; } = string.Empty;

    public string Username { get; private set; } = string.Empty;

    public string? Bio { get; private set; }

    public Guid? CityId { get; private set; }
    public City? City { get; private set; }

    public string? ProfileImageUrl { get; private set; }

    public User User { get; private set; } = null!;

    private Profile()
    {
    }
public Profile(
    Guid userId,
    string firstName,
    string lastName,
    string username,
    Guid? cityId = null,
    string? bio = null)
{
    Id = Guid.NewGuid();
    UserId = userId;
    FirstName = firstName;
    LastName = lastName;
    Username = username;
    CityId = cityId;
    Bio = bio;
    CreatedAt = DateTime.UtcNow;
}
}