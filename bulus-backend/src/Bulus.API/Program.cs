using Bulus.API.Extensions;
using Bulus.Infrastructure;
using Bulus.Infrastructure.Persistence.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddInfrastructure(builder.Configuration);
builder.Services.AddSupabaseAuthentication(builder.Configuration);
builder.Services.AddControllers();
// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = Microsoft.OpenApi.SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = Microsoft.OpenApi.ParameterLocation.Header,
        Description = "Supabase access token'ınızı girin."
    });

    options.AddSecurityRequirement(document =>
        new Microsoft.OpenApi.OpenApiSecurityRequirement
        {
            [new Microsoft.OpenApi.OpenApiSecuritySchemeReference("Bearer", document)] =
                new List<string>()
        });
});
var app = builder.Build();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.MapGet("/weatherforecast", () =>
{
    var summaries = new[]
    {
        "Freezing",
        "Bracing",
        "Chilly",
        "Cool",
        "Mild",
        "Warm",
        "Balmy",
        "Hot",
        "Sweltering",
        "Scorching"
    };

    var forecast = Enumerable.Range(1, 5)
        .Select(index => new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();

    return forecast;
})
.WithName("GetWeatherForecast");

app.MapGet("/health/database", async (BulusDbContext db) =>
{
    try
    {
        var connection = db.Database.GetDbConnection();

        await connection.OpenAsync();
        await connection.CloseAsync();

        return Results.Ok(new
        {
            status = "Database connection successful"
        });
    }
    catch (Exception ex)
    {
        return Results.Problem(
            title: "Database connection error",
            detail: ex.ToString(),
            statusCode: 500);
    }
});

app.MapGet("/auth/test", (HttpContext context) =>
{
    return Results.Ok(new
    {
        isAuthenticated = context.User.Identity?.IsAuthenticated,
        userId = context.User.FindFirst("sub")?.Value,
        email = context.User.FindFirst("email")?.Value
    });
})
.RequireAuthorization();

app.Run();

record WeatherForecast(
    DateOnly Date,
    int TemperatureC,
    string? Summary)
{
    public int TemperatureF =>
        32 + (int)(TemperatureC / 0.5556);
}