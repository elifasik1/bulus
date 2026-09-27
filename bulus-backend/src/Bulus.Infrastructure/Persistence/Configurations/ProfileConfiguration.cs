using Bulus.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bulus.Infrastructure.Persistence.Configurations;

public class ProfileConfiguration : IEntityTypeConfiguration<Profile>
{
    public void Configure(EntityTypeBuilder<Profile> builder)
    {
        builder.ToTable("profiles");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever();

        builder.Property(x => x.UserId)
            .IsRequired();

        builder.HasIndex(x => x.UserId)
            .IsUnique();

        builder.Property(x => x.FirstName)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(x => x.LastName)
            .IsRequired()
            .HasMaxLength(100);

        builder.Property(x => x.Username)
            .IsRequired()
            .HasMaxLength(50);

        builder.HasIndex(x => x.Username)
            .IsUnique();

        builder.Property(x => x.Bio)
            .HasMaxLength(500);

        builder.Property(x => x.ProfileImageUrl)
            .HasMaxLength(1000);

        builder.HasOne(x => x.City)
            .WithMany(x => x.Profiles)
            .HasForeignKey(x => x.CityId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}