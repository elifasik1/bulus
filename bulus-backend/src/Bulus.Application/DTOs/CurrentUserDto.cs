namespace Bulus.Application.DTOs.Users;

public record CurrentUserDto(
    Guid Id,
    string Email,
    string Role,
    bool IsActive,
    ProfileDto? Profile);

public record ProfileDto(
    string FirstName,
    string LastName,
    string Username,
    string? Bio,
    Guid? CityId,
    string? ProfileImageUrl);