# ALUNE — Laravel Backend Initial Setup Documentation

## 1. Environment & Versions Overview

| Component | Version / Specification | Details |
| :--- | :--- | :--- |
| **Backend Framework** | **Laravel 13.44.1** | Latest stable Laravel release (`laravel/laravel` v13.11.0, `laravel/framework` v13.44.1) |
| **PHP Runtime** | **PHP 8.5.13** | Built by Beyond Code for `php.new` (NTS Visual C++ 2022 x64) at `C:\Users\hamza\.config\herd-lite\bin\php.exe` |
| **Database Server** | **10.4.32-MariaDB** | Local XAMPP MySQL server running on `127.0.0.1:3306` |
| **API Authentication** | **Laravel Sanctum v4.5.0** | Token & SPA stateful session support configured |
| **Package Manager** | **Composer 2.8.8** | Located at `C:\ProgramData\ComposerSetup\bin\composer.phar` |
| **Frontend Integration** | **React / Vite** | Located at `C:\Users\hamza\Desktop\Alune\frontend\alune` running on `http://localhost:5173` |

> **Note on PHP CLI Path:**
> The system has two PHP installations:
> 1. PHP 8.5.13 installed via `php.new` at `C:\Users\hamza\.config\herd-lite\bin\php.exe` (meets Laravel 13 requirements of `php >= 8.3`).
> 2. Legacy PHP 8.0.30 from XAMPP at `C:\xampp\php\php.exe`.
> To run commands with PHP 8.5, ensure `C:\Users\hamza\.config\herd-lite\bin` is prioritized in your PATH or use the full path to `php.exe`.

---

## 2. Project Directory Structure

```
C:\Users\hamza\Desktop\Alune\
├── backend/                               # Laravel 13 Backend Application
│   ├── app/
│   │   ├── Http/Controllers/              # Controller classes
│   │   ├── Models/
│   │   │   └── User.php                   # User model with HasApiTokens trait
│   │   └── Traits/
│   │       └── ApiResponse.php            # Standardized JSON response trait
│   ├── bootstrap/
│   │   └── app.php                        # Laravel 13 routing, middleware & JSON exception handling
│   ├── config/
│   │   ├── cors.php                       # CORS configuration for Vite (http://localhost:5173)
│   │   ├── database.php                   # Database connections (mysql configured)
│   │   ├── filesystems.php                # Public disk configured for product/hero images
│   │   └── sanctum.php                    # Sanctum stateful domains & guards
│   ├── database/
│   │   └── migrations/                    # Core migrations + personal_access_tokens
│   ├── docs/
│   │   └── ALUNE_BACKEND_SETUP.md         # Setup and architectural documentation
│   ├── public/
│   │   └── storage -> ../storage/app/public  # Public storage symbolic link
│   ├── routes/
│   │   ├── api.php                        # API routes (/api/health, /api/user)
│   │   ├── console.php                    # Artisan console commands
│   │   └── web.php                        # Web routes
│   ├── storage/
│   │   └── app/public/
│   │       ├── products/                  # Product image storage
│   │       ├── hero/                      # Hero carousel banners
│   │       └── categories/                # Category icons and thumbnails
│   ├── tests/
│   │   └── Feature/ApiSetupTest.php       # Health, auth & Sanctum verification tests
│   ├── .env                               # Local environment configuration (Git-ignored)
│   ├── .env.example                       # Clean template for environment configuration
│   └── composer.json                      # PHP dependencies
├── backend_backup_laravel9/               # Safe preservation of initial skeleton
└── frontend/
    └── alune/                             # React + Vite + Tailwind CSS v4 frontend (untouched)
```

---

## 3. Database Configuration

The MySQL database server is managed through XAMPP on localhost:

- **Host:** `127.0.0.1`
- **Port:** `3306`
- **Database Name:** `alune_db` (created with `utf8mb4_unicode_ci` encoding)
- **Username:** `root`
- **Password:** *(empty)*

### Environment Variables (`backend/.env` & `backend/.env.example`)
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=alune_db
DB_USERNAME=root
DB_PASSWORD=
```

### Applied Migrations
1. `0001_01_01_000000_create_users_table` (Users, password resets, sessions)
2. `0001_01_01_000001_create_cache_table` (Database caching table)
3. `0001_01_01_000002_create_jobs_table` (Queue jobs and failed jobs)
4. `2026_11_24_180348_create_personal_access_tokens_table` (Sanctum API tokens)

---

## 4. API & Sanctum Configuration

### Architecture & Conventions
- **Routing:** API routes are registered via `routes/api.php` and loaded in `bootstrap/app.php`.
- **JSON Error Handling:** `bootstrap/app.php` is configured with `shouldRenderJsonWhen(fn ($req) => $req->is('api/*') || $req->expectsJson())` to ensure all API validation and HTTP exceptions return JSON rather than HTML redirects.
- **Response Trait:** `App\Traits\ApiResponse` provides `success($data, $message, $code)` and `error($message, $code, $errors)` for uniform response formatting.
- **Sanctum Authentication:**
  - Package: `laravel/sanctum` v4.5.0
  - Configuration: `config/sanctum.php`
  - User model: Uses `Laravel\Sanctum\HasApiTokens`
  - Stateful domains: Configured in `.env` as `SANCTUM_STATEFUL_DOMAINS=localhost:5173,127.0.0.1:5173`

### Existing API Endpoints
- `GET /api/health` — Public health check returning API status, app name, and timestamp.
- `GET /api/user` — Protected by `auth:sanctum` middleware, returns authenticated user data.
- `GET /sanctum/csrf-cookie` — Sanctum CSRF cookie initialization for SPA clients.

---

## 5. CORS Configuration

CORS is managed through `config/cors.php`:
- **Allowed Origins:** `env('FRONTEND_URL', 'http://localhost:5173')`, `http://localhost:5173`, `http://127.0.0.1:5173`
- **Allowed Methods:** All (`*`)
- **Allowed Headers:** All (`*`)
- **Supports Credentials:** `true` (enables cookies and session credentials for SPA)
- **Paths:** `api/*`, `sanctum/csrf-cookie`

---

## 6. Image Storage Configuration

Configured to support ALUNE's e-commerce asset uploads:
- **Default Filesystem:** `FILESYSTEM_DISK=public`
- **Storage Link:** Connected from `backend/public/storage` to `backend/storage/app/public` via `php artisan storage:link`.
- **Public URL Scheme:** Images placed in `storage/app/public/...` are publicly served via `http://localhost:8000/storage/...`.
- **Pre-created Directories:**
  - `storage/app/public/products` (Product catalog images)
  - `storage/app/public/hero` (Homepage carousel images)
  - `storage/app/public/categories` (Category badges and pictures)

---

## 7. How to Run the Backend

### Prioritize PHP 8.5 in your PowerShell Session
```powershell
$env:PATH = "C:\Users\hamza\.config\herd-lite\bin;" + $env:PATH
```

### Start Laravel Development Server
```powershell
cd C:\Users\hamza\Desktop\Alune\backend
php artisan serve --port=8000
```
Backend will be available at: `http://localhost:8000`  
API Health Check: `http://localhost:8000/api/health`

### Run Automated Tests
```powershell
cd C:\Users\hamza\Desktop\Alune\backend
php artisan test
```

### Run Migrations
```powershell
cd C:\Users\hamza\Desktop\Alune\backend
php artisan migrate
```

---

## 8. Remaining Manual Steps & Recommendations

1. **Windows System PATH (Permanent Precedence):**
   - In Windows System Environment Variables, place `C:\Users\hamza\.config\herd-lite\bin` above `C:\xampp\php` in the Machine PATH so opening any standard terminal automatically invokes PHP 8.5 instead of XAMPP's PHP 8.0.
2. **Start XAMPP MySQL:**
   - Always ensure MySQL is running in your XAMPP Control Panel before starting the backend.
3. **Frontend Connection (`frontend/alune/.env`):**
   - When integrating the React app, define `VITE_API_URL=http://localhost:8000/api` in your frontend configuration.
