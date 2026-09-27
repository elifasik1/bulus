using Bulus.Application.DTOs.Users;

namespace Bulus.Application.Abstractions.Services;

public interface IUserService
{
    Task<CurrentUserDto?> GetCurrentUserAsync(
        CancellationToken cancellationToken = default);
}