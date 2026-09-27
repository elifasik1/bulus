namespace Bulus.Application.Abstractions.Identity;

public interface ICurrentUserService
{
    Guid UserId { get; }

    string? Email { get; }

    bool IsAuthenticated { get; }
}