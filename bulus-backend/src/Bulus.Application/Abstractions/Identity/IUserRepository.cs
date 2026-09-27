using Bulus.Domain.Entities;

namespace Bulus.Application.Abstractions.Persistence;

public interface IUserRepository
{
    Task<User?> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken = default);
}