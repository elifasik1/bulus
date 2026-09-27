using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace Bulus.API.Extensions;

public static class AuthenticationExtensions
{
    public static IServiceCollection AddSupabaseAuthentication(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        var supabaseUrl = configuration["Supabase:Url"];

        if (string.IsNullOrWhiteSpace(supabaseUrl))
        {
            throw new InvalidOperationException(
                "Supabase:Url configuration is missing.");
        }

        var issuer = $"{supabaseUrl}/auth/v1";
        var jwksUrl = $"{issuer}/.well-known/jwks.json";

        services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.MetadataAddress =
                    $"{issuer}/.well-known/openid-configuration";

                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = issuer,

                    ValidateAudience = true,
                    ValidAudience = "authenticated",

                    ValidateLifetime = true,

                    ValidateIssuerSigningKey = true,

                    NameClaimType = "sub"
                };

                options.RequireHttpsMetadata = true;
            });

        services.AddAuthorization();

        return services;
    }
}