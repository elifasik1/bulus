using Bulus.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bulus.Infrastructure.Persistence.Configurations;

public class OpportunityConfiguration : IEntityTypeConfiguration<Opportunity>
{
    public void Configure(EntityTypeBuilder<Opportunity> builder)
    {
        builder.ToTable("opportunities");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever();

        builder.Property(x => x.UserId)
            .IsRequired();

        builder.Property(x => x.Title)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(x => x.Description)
            .IsRequired()
            .HasMaxLength(5000);

        builder.Property(x => x.Type)
            .IsRequired();

        builder.Property(x => x.CategoryId)
            .IsRequired();

        builder.Property(x => x.CityId)
            .IsRequired();

        builder.Property(x => x.IsActive)
            .IsRequired();

        builder.HasOne(x => x.User)
            .WithMany(x => x.Opportunities)
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Category)
            .WithMany(x => x.Opportunities)
            .HasForeignKey(x => x.CategoryId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.City)
            .WithMany(x => x.Opportunities)
            .HasForeignKey(x => x.CityId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasIndex(x => x.UserId);

        builder.HasIndex(x => x.Type);

        builder.HasIndex(x => x.CategoryId);

        builder.HasIndex(x => x.CityId);

        builder.HasIndex(x => x.IsActive);

        builder.HasIndex(x => x.CreatedAt);
    }
}
