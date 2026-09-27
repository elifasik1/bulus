using Bulus.Application.DTOs;

namespace Bulus.Application.Abstractions.Identity;

public interface IUserService
{
    Task<CurrentUserDto?> GetCurrentUserAsync(
        CancellationToken cancellationToken = default);
}