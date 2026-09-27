using Bulus.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bulus.Infrastructure.Persistence.Configurations;

public class MessageConfiguration : IEntityTypeConfiguration<Message>
{
    public void Configure(EntityTypeBuilder<Message> builder)
    {
        builder.ToTable("messages");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedNever();

        builder.Property(x => x.ConversationId)
            .IsRequired();

        builder.Property(x => x.SenderId)
            .IsRequired();

        builder.Property(x => x.Content)
            .IsRequired()
            .HasMaxLength(5000);

        builder.Property(x => x.IsRead)
            .IsRequired();

        builder.HasOne(x => x.Conversation)
            .WithMany(x => x.Messages)
            .HasForeignKey(x => x.ConversationId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Sender)
            .WithMany(x => x.Messages)
            .HasForeignKey(x => x.SenderId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasIndex(x => x.ConversationId);

        builder.HasIndex(x => x.SenderId);

        builder.HasIndex(x => new
        {
            x.ConversationId,
            x.CreatedAt
        });
    }
}