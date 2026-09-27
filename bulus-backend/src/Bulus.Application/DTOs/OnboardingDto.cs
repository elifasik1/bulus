namespace Bulus.Application.DTOs;

public record OnboardingRequest(
    string FirstName,
    string LastName,
    string Username,
    Guid? CityId,
    string? Bio);

public record OnboardingResponse(
    Guid Id,
    string Email,
    string Role,
    bool IsActive,
    ProfileDto Profile);