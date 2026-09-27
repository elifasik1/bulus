using Bulus.Application.DTOs;

namespace Bulus.Application.Abstractions.Services;

public interface IOnboardingService
{
    Task<OnboardingResponse?> CreateProfileAsync(
        Guid userId,
        string email,
        OnboardingRequest request,
        CancellationToken cancellationToken = default);
}