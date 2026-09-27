namespace Bulus.Application.DTOs;

public record ProfileDto(
    string FirstName,
    string LastName,
    string Username,
    string? Bio,
    Guid? CityId,
    string? ProfileImageUrl);