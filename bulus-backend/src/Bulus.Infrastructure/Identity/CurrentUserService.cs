using Bulus.Application.Abstractions.Identity;
using Microsoft.AspNetCore.Http;

namespace Bulus.Infrastructure.Identity;

public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public CurrentUserService(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public bool IsAuthenticated =>
        _httpContextAccessor.HttpContext?.User.Identity?.IsAuthenticated
        ?? false;

    public Guid UserId
    {
        get
        {
            var userId = _httpContextAccessor.HttpContext?
                .User
                .FindFirst("sub")
                ?.Value;

            if (!Guid.TryParse(userId, out var id))
            {
                throw new UnauthorizedAccessException(
                    "Authenticated user ID could not be found.");
            }

            return id;
        }
    }

    public string? Email =>
        _httpContextAccessor.HttpContext?
            .User
            .FindFirst("email")
            ?.Value;
}