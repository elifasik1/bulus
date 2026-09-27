using Bulus.Application.Abstractions.Identity;
using Bulus.Application.Abstractions.Persistence;
using Bulus.Application.Abstractions.Services;
using Bulus.Application.DTOs.Users;

namespace Bulus.Application.Services;

public class UserService : IUserService
{
    private readonly ICurrentUserService _currentUserService;
    private readonly IUserRepository _userRepository;

    public UserService(
        ICurrentUserService currentUserService,
        IUserRepository userRepository)
    {
        _currentUserService = currentUserService;
        _userRepository = userRepository;
    }

    public async Task<CurrentUserDto?> GetCurrentUserAsync(
        CancellationToken cancellationToken = default)
    {
        if (!_currentUserService.IsAuthenticated)
        {
            return null;
        }

        var user = await _userRepository.GetByIdAsync(
            _currentUserService.UserId,
            cancellationToken);

        if (user is null)
        {
            return null;
        }

        var profile = user.Profile is null
            ? null
            : new ProfileDto(
                user.Profile.FirstName,
                user.Profile.LastName,
                user.Profile.Username,
                user.Profile.Bio,
                user.Profile.CityId,
                user.Profile.ProfileImageUrl);

        return new CurrentUserDto(
            user.Id,
            user.Email,
            user.Role.ToString(),
            user.IsActive,
            profile);
    }
}