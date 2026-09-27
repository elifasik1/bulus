using Bulus.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bulus.Infrastructure.Persistence.Configurations;

public class SavedItemConfiguration : IEntityTypeConfiguration<SavedItem>
{
    public void Configure(EntityTypeBuilder<SavedItem> builder)
    {
        builder.ToTable("saved_items");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever();

        builder.Property(x => x.UserId)
            .IsRequired();

        builder.Property(x => x.OpportunityId)
            .IsRequired();

        builder.HasOne(x => x.User)
            .WithMany(x => x.SavedItems)
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Opportunity)
            .WithMany(x => x.SavedItems)
            .HasForeignKey(x => x.OpportunityId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasIndex(x => new
        {
            x.UserId,
            x.OpportunityId
        })
        .IsUnique();

        builder.HasIndex(x => x.UserId);
    }
}