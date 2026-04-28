# API REST Files

API REST desarrollada con Node.js, Express y MongoDB que permite autenticación de usuarios, gestión de roles, relaciones entre colecciones y subida de archivos multimedia a Cloudinary.

## Tecnologías

- Node.js
- Express
- MongoDB (Mongoose)
- Cloudinary
- Multer
- JWT (jsonwebtoken)
- Bcrypt

## Modelos

- User
- Movie
- Category

## Relaciones

- Movie → Category (populate)
- Movie → User (populate)

## Endpoints

### Auth

- POST /api/v1/auth/register
- POST /api/v1/auth/login
- PUT /api/v1/auth/role/:id (admin)
- DELETE /api/v1/auth/:id (admin o propio usuario)

### Movies

- GET /api/v1/movies
- POST /api/v1/movies
- PUT /api/v1/movies/:id
- DELETE /api/v1/movies/:id

### Categories

- GET /api/v1/categories
- POST /api/v1/categories

## Subida de archivos

Las imágenes se suben mediante multipart/form-data usando el campo:

- img (tipo File)

## Seed de datos

Ejecutar:

node seed.js

## Variables de entorno

Crear un archivo `.env` con:

MONGO_URI=
CLOUD_NAME=
API_KEY=
API_SECRET=

## Seguridad

Algunos endpoints requieren autenticación mediante JWT.

Header:
Authorization: Bearer TOKEN

Endpoints protegidos:

- POST /api/v1/movies
- PUT /api/v1/movies/:id
- DELETE /api/v1/movies/:id
- PUT /api/v1/auth/role/:id
- DELETE /api/v1/auth/:id

## Gestión de roles

- Los usuarios se crean siempre con rol "user"
- Un admin puede cambiar el rol de otros usuarios
- Un admin puede eliminar cualquier usuario
- Un usuario solo puede eliminarse a sí mismo

## Funcionalidades

- Registro y login de usuarios
- Autenticación con JWT
- Roles (user / admin)
- CRUD completo de movies
- CRUD básico de categories
- Relación entre colecciones
- Subida de imágenes a Cloudinary
- Eliminación de imágenes en Cloudinary al borrar recursos