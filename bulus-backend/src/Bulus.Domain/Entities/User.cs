using Bulus.Domain.Common;
using Bulus.Domain.Enums;

namespace Bulus.Domain.Entities;

public class User : BaseEntity
{
    public string Email { get; private set; } = string.Empty;

    public UserRole Role { get; private set; }

    public bool IsActive { get; private set; } = true;

  public Profile? Profile { get; private set; }

public ICollection<Opportunity> Opportunities { get; private set; }
    = new List<Opportunity>();

public ICollection<ConversationParticipant> ConversationParticipants { get; private set; }
    = new List<ConversationParticipant>();

public ICollection<Message> Messages { get; private set; }
    = new List<Message>();

public ICollection<Notification> Notifications { get; private set; }
    = new List<Notification>();

public ICollection<SavedItem> SavedItems { get; private set; }
    = new List<SavedItem>();

    private User()
    {
    }

 public User(Guid id, string email)
{
    Id = id;
    Email = email;
    Role = UserRole.User;
    IsActive = true;
    CreatedAt = DateTime.UtcNow;
}
    public void UpdateEmail(string email)
    {
        Email = email;
        UpdatedAt = DateTime.UtcNow;
    }

    public void SetRole(UserRole role)
    {
        Role = role;
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