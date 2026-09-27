Buluş

Çevren yoksa, çevreni oluştur.

Buluş, insanların yalnızca ilan görmek yerine birbirleriyle gerçek
fırsatlar ve ihtiyaçlar üzerinden bağlantı kurmasını amaçlayan bir
fırsat ağıdır.

İş, staj, proje, mentorluk, ekip arkadaşı, kullanıcı testi, tez
araştırması, eğitim ve benzeri fırsatlar insanların doğrudan
birbirlerine ulaşabileceği şekilde paylaşılır.

🎯 Vizyon

Buluş'un amacı, özellikle yeni mezunlar ve fırsatlara erişimi kısıtlı
kişiler için:

çevre eksikliğini azaltmak,

gerçek insanları gerçek ihtiyaçlarla buluşturmak,

fırsatlara erişimi daha demokratik hale getirmek,

şirket merkezli değil, insan ve fırsat merkezli bir ağ
oluşturmak.

İhtiyacın olan insan, sandığından daha yakın.

🏗️ Proje Durumu

Proje aktif geliştirme aşamasındadır.

Tamamlananlar

.NET backend solution

Clean Architecture / layered architecture

Domain entity'leri

EF Core yapılandırmaları

PostgreSQL / Supabase bağlantısı

Initial database migration

Supabase Auth JWT doğrulama altyapısı

Current user abstraction

User repository/service altyapısı

GET /api/users/me

Swagger + Bearer authentication

Temel veritabanı tabloları

Sıradaki adımlar

Supabase Auth gerçek kullanıcı ile uçtan uca test

User/Profile provisioning ve onboarding API

Şehir ve kategori seed verileri

Opportunity CRUD API

Fırsat filtreleme ve keşfet API'leri

Frontend ↔ Backend entegrasyonu

Mesajlaşma API'leri

Bildirimler

Kaydedilen fırsatlar

Admin authorization

Validation ve global exception handling

Test kapsamının genişletilmesi

Supabase Storage ile profil görselleri

Realtime messaging

🧩 Teknoloji Yığını

Backend

C#

ASP.NET Core Web API

Entity Framework Core

PostgreSQL

Npgsql

Supabase

Authentication

Supabase Auth

JWT Bearer Authentication

Frontend

Next.js

React

TypeScript

Tailwind CSS

Framer Motion

Lucide React

📐 Mimari

Backend, Clean Architecture prensipleri doğrultusunda katmanlara
ayrılmıştır:

Bulus.slnx
│
├── src/
│   ├── Bulus.Domain/
│   │   ├── Entities/
│   │   ├── Enums/
│   │   ├── ValueObjects/
│   │   └── Common/
│   │
│   ├── Bulus.Application/
│   │   ├── Abstractions/
│   │   │   ├── Persistence/
│   │   │   ├── Identity/
│   │   │   └── Services/
│   │   ├── Features/
│   │   ├── DTOs/
│   │   ├── Behaviors/
│   │   └── Common/
│   │
│   ├── Bulus.Infrastructure/
│   │   ├── Persistence/
│   │   │   ├── Context/
│   │   │   ├── Configurations/
│   │   │   ├── Repositories/
│   │   │   └── Migrations/
│   │   ├── Identity/
│   │   └── Services/
│   │
│   └── Bulus.API/
│       ├── Controllers/
│       ├── Middleware/
│       ├── Extensions/
│       └── Filters/
│
└── tests/
    ├── Bulus.Domain.Tests/
    ├── Bulus.Application.Tests/
    └── Bulus.API.Tests/

Katman bağımlılıkları

Domain
  ↑
Application
  ↑
Infrastructure
  ↑
API

Domain ve Application katmanları Supabase'e doğrudan bağımlı değildir.
Supabase entegrasyonu Infrastructure katmanında tutulur.

🧠 Domain Model

Temel domain varlıkları:

User
 ├── Profile
 ├── Opportunities
 ├── Notifications
 └── SavedItems

Opportunity
 ├── Category
 └── City

Conversation
 ├── ConversationParticipants
 └── Messages

Temel roller:

User
Admin

Fırsat türleri:

Job
Internship
Project
Mentorship
TeamMember
UserTesting
ThesisResearch
Education
Other

🔐 Authentication Akışı

Kimlik doğrulama Supabase Auth tarafından yönetilir.

Frontend
   │
   │ Supabase Auth
   ▼
Supabase
   │
   │ JWT
   ▼
.NET API
   │
   │ JWT validation
   ▼
CurrentUserService
   │
   │ User UUID (sub)
   ▼
PostgreSQL

Supabase Auth kullanıcısının UUID'si, uygulamadaki User.Id ile
eşleştirilir.

Parolalar uygulamanın users tablosunda tutulmaz. Kimlik bilgileri
Supabase Auth tarafından yönetilir.

🗄️ Veritabanı

EF Core migration'ları PostgreSQL üzerinde çalıştırılır.

Temel tablolar:

users
profiles
opportunities
categories
cities
conversations
conversation_participants
messages
notifications
saved_items

Migration geçmişi:

__EFMigrationsHistory

Migration oluşturma

dotnet ef migrations add MigrationName --project src/Bulus.Infrastructure --startup-project src/Bulus.API --output-dir Persistence/Migrations

Database güncelleme

dotnet ef database update --project src/Bulus.Infrastructure --startup-project src/Bulus.API

⚙️ Local Development

Gereksinimler

.NET SDK

PostgreSQL / Supabase

Node.js

npm

Backend'i çalıştırma

dotnet restore
dotnet build
dotnet run --project src/Bulus.API

Swagger geliştirme ortamında API endpoint'lerini test etmek için
kullanılabilir.

Configuration

Connection string gibi hassas bilgiler repository'ye yazılmamalıdır.

Local geliştirmede .NET User Secrets kullanılabilir:

dotnet user-secrets set "ConnectionStrings:DefaultConnection" "YOUR_CONNECTION_STRING" --project src/Bulus.API/Bulus.API.csproj

📡 API

Mevcut temel endpoint'lerden bazıları:

GET /api/users/me
GET /auth/test
GET /health/database

Korunan endpoint'ler JWT Bearer token gerektirir.

Swagger üzerinden:

Authorize
→ Bearer token
→ endpoint'i çağır

🧪 Testing

Test projeleri:

tests/
├── Bulus.Domain.Tests/
├── Bulus.Application.Tests/
└── Bulus.API.Tests/

Testler genişletilerek domain kuralları, application servisleri ve API
davranışları kapsanacaktır.

🎨 Ürün İlkeleri

Buluş bir LinkedIn klonu veya klasik bir iş ilanı platformu olarak
tasarlanmamaktadır.

Temel ürün prensipleri:

İnsan merkezli

Fırsat merkezli

Gerçek bağlantılar

Düşük gürültü

Şirket reklamlarından uzak deneyim

Vanity metric yerine gerçek eşleşmeler

Küçük şehirlerdeki fırsat erişimini destekleme

🛣️ Roadmap

[✓] Proje kurulumu
[✓] Clean Architecture
[✓] Domain modeli
[✓] EF Core
[✓] Supabase PostgreSQL
[✓] JWT Authentication altyapısı
[✓] Swagger
[ ] Auth + onboarding
[ ] Opportunity API
[ ] Feed / Explore
[ ] Messaging
[ ] Notifications
[ ] Saved Opportunities
[ ] Admin
[ ] Frontend integration
[ ] Production hardening

🔒 Güvenlik

Repository'ye aşağıdakiler kesinlikle commit edilmemelidir:

Database password

Supabase secret key

JWT secret/private keys

API keys

.env içerisindeki hassas bilgiler

User Secrets içerikleri

Üretim ortamında gizli bilgiler deployment platformunun
secret/environment variable mekanizması üzerinden sağlanmalıdır.

📄 Lisans

Lisans modeli proje geliştirme sürecinde belirlenecektir.

Buluş --- Çevren yoksa, çevreni oluştur.