using Bulus.Application.Abstractions.Persistence;
using Bulus.Domain.Entities;
using Bulus.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace Bulus.Infrastructure.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    private readonly BulusDbContext _context;

    public UserRepository(BulusDbContext context)
    {
        _context = context;
    }

    public async Task<User?> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken = default)
    {
        return await _context.Users
            .Include(x => x.Profile)
            .FirstOrDefaultAsync(
                x => x.Id == userId,
                cancellationToken);
    }
}