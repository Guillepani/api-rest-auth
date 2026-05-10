# API REST Files

API REST desarrollada con Node.js, Express y MongoDB que incluye autenticación JWT, gestión de usuarios con roles, relaciones entre colecciones y subida de archivos multimedia a Cloudinary.

---

## Tecnologías

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- Bcrypt
- Multer
- Cloudinary
- Nodemon
- Dotenv

---

## Modelos

- User
- Movie
- Category

---

## Relaciones

- Movie → Category
- Movie → User

---

## Instalación

Clonar repositorio:

```bash
git clone https://github.com/Guillepani/api-rest-files.git
```

Instalar dependencias:

```bash
npm install
```

Crear archivo `.env`:

```env
MONGO_URI=mongo_uri
JWT_SECRET=jwt_secret
CLOUD_NAME=cloud_name
API_KEY=api_key
API_SECRET=api_secret
CLOUDINARY_FOLDER=cloudinary_folder
```

---

## Scripts

| Script | Descripción |
|---|---|
| npm run dev | Inicia el servidor con nodemon |
| npm run seed | Ejecuta la semilla |

---

## Endpoints

### Auth

| Método | Endpoint | Descripción |
|---|---|---|
| POST | /api/v1/auth/register | Registro de usuario |
| POST | /api/v1/auth/login | Login de usuario |
| PUT | /api/v1/auth/role/:id | Actualizar rol (admin) |
| DELETE | /api/v1/auth/:id | Eliminar usuario |

---

### Users

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/v1/users | Obtener usuarios |
| GET | /api/v1/users/:id | Obtener usuario por ID |

---

### Movies

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/v1/movies | Obtener movies |
| POST | /api/v1/movies | Crear movie |
| PUT | /api/v1/movies/:id | Actualizar movie |
| DELETE | /api/v1/movies/:id | Eliminar movie |

---

### Categories

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/v1/categories | Obtener categories |
| POST | /api/v1/categories | Crear category |
| PUT | /api/v1/categories/:id | Actualizar category |
| DELETE | /api/v1/categories/:id | Eliminar category |

---

## Subida de archivos

Las imágenes se suben mediante multipart/form-data usando el campo:

```txt
img
```

---

## Seed

Ejecutar:

```bash
npm run seed
```

---

## Seguridad

Algunos endpoints requieren autenticación JWT.

Header:

```txt
Authorization: Bearer TOKEN
```

---

## Gestión de roles

- Los usuarios se registran con rol `user`
- Un admin puede cambiar roles
- Un admin puede eliminar cualquier usuario
- Un usuario puede eliminarse a sí mismo

---

## Funcionalidades

- Registro y login
- Autenticación JWT
- Roles user/admin
- CRUD completo de movies
- CRUD completo de categories
- Lectura de usuarios
- Relaciones entre colecciones
- Populate con Mongoose
- Subida de imágenes a Cloudinary
- Eliminación de imágenes en Cloudinary
- Variables de entorno protegidas
- Validación de ObjectIds

---

## Autor

Guillem Paniagua