using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Bulus.Infrastructure.Persistence.Context;
using Bulus.Application.Abstractions.Identity;
using Bulus.Infrastructure.Identity;
using Bulus.Application.Abstractions.Persistence;
using Bulus.Infrastructure.Persistence.Repositories;
using Bulus.Application.Abstractions.Services;
using Bulus.Application.Services;
namespace Bulus.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<BulusDbContext>(options =>
        {
            options.UseNpgsql(
                configuration.GetConnectionString("DefaultConnection"));
        });
        services.AddHttpContextAccessor();

        services.AddScoped<ICurrentUserService, CurrentUserService>();

        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IUserService, UserService>();
        return services;
    }
}