using Bulus.Application.Abstractions.Identity;
using Bulus.Application.Abstractions.Services;
using Bulus.Application.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Bulus.API.Controllers;

[ApiController]
[Route("api/users")]
[Authorize]
public class OnboardingController : ControllerBase
{
    private readonly ICurrentUserService _currentUserService;
    private readonly IOnboardingService _onboardingService;

    public OnboardingController(
        ICurrentUserService currentUserService,
        IOnboardingService onboardingService)
    {
        _currentUserService = currentUserService;
        _onboardingService = onboardingService;
    }

    [HttpPost("onboarding")]
    public async Task<IActionResult> Onboarding(
        [FromBody] OnboardingRequest request,
        CancellationToken cancellationToken)
    {
        if (!_currentUserService.IsAuthenticated)
        {
            return Unauthorized();
        }

        var result = await _onboardingService.CreateProfileAsync(
            _currentUserService.UserId,
            _currentUserService.Email ?? string.Empty,
            request,
            cancellationToken);

        if (result is null)
        {
            return Conflict(new
            {
                message = "Bu kullanıcı için zaten bir hesap oluşturulmuş."
            });
        }

        return StatusCode(StatusCodes.Status201Created, result);
    }
}