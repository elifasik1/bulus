using Bulus.Application.Abstractions.Identity;
using Bulus.Application.Abstractions.Services;
using Bulus.Application.DTOs;
using Bulus.Domain.Entities;

namespace Bulus.Application.Services;

public class OnboardingService : IOnboardingService
{
    private readonly IUserRepository _userRepository;

    public OnboardingService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<OnboardingResponse?> CreateProfileAsync(
        Guid userId,
        string email,
        OnboardingRequest request,
        CancellationToken cancellationToken = default)
    {
        var existingUser = await _userRepository.GetByIdAsync(
            userId,
            cancellationToken);

        if (existingUser is not null)
        {
            return null;
        }

        var usernameExists =
            await _userRepository.ExistsByUsernameAsync(
                request.Username,
                cancellationToken);

        if (usernameExists)
        {
            throw new InvalidOperationException(
                "Bu kullanıcı adı zaten kullanılıyor.");
        }

        var user = new User(userId, email);

        var profile = new Profile(
            userId,
            request.FirstName,
            request.LastName,
            request.Username,
            request.CityId,
            request.Bio);

        await _userRepository.AddAsync(
            user,
            cancellationToken);

        await _userRepository.AddProfileAsync(
            profile,
            cancellationToken);

        await _userRepository.SaveChangesAsync(
            cancellationToken);

        return new OnboardingResponse(
            user.Id,
            user.Email,
            user.Role.ToString(),
            user.IsActive,
            new ProfileDto(
                profile.FirstName,
                profile.LastName,
                profile.Username,
                profile.Bio,
                profile.CityId,
                profile.ProfileImageUrl));
    }
}