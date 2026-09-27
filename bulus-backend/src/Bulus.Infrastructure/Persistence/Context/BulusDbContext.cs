using Bulus.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Bulus.Infrastructure.Persistence.Context;

public class BulusDbContext : DbContext
{
    public BulusDbContext(DbContextOptions<BulusDbContext> options)
        : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.ApplyConfigurationsFromAssembly(typeof(BulusDbContext).Assembly);

    base.OnModelCreating(modelBuilder);
}

    public DbSet<User> Users => Set<User>();

    public DbSet<Profile> Profiles => Set<Profile>();

    public DbSet<Opportunity> Opportunities => Set<Opportunity>();

    public DbSet<Category> Categories => Set<Category>();

    public DbSet<City> Cities => Set<City>();

    public DbSet<Conversation> Conversations => Set<Conversation>();

    public DbSet<ConversationParticipant> ConversationParticipants => Set<ConversationParticipant>();

    public DbSet<Message> Messages => Set<Message>();

    public DbSet<Notification> Notifications => Set<Notification>();

    public DbSet<SavedItem> SavedItems => Set<SavedItem>();
}