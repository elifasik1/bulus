namespace Bulus.Application.DTOs;

public record CurrentUserDto(
    Guid Id,
    string Email,
    string Role,
    bool IsActive,
    ProfileDto? Profile);