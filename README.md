# API REST Files

API REST desarrollada con Node.js, Express y MongoDB que permite autenticación de usuarios, gestión de roles y subida de archivos multimedia a Cloudinary.

## Tecnologías

- Node.js
- Express
- MongoDB (Mongoose)
- Cloudinary
- Multer
- JWT (jsonwebtoken)
- Bcrypt

## Endpoints

### Auth

- POST /api/v1/auth/register
- POST /api/v1/auth/login

### Movies

- GET /api/v1/movies
- POST /api/v1/movies
- DELETE /api/v1/movies/:id

## Subida de archivos

Las imágenes se suben mediante multipart/form-data usando el campo:

- img (tipo File)

## Variables de entorno

Crear un archivo .env con:

MONGO_URI=
CLOUD_NAME=
API_KEY=
API_SECRET=

## Funcionalidades

- Registro y login de usuarios
- Autenticación con JWT
- Roles (user / admin)
- Subida de imágenes a Cloudinary
- Eliminación de imágenes en Cloudinary al borrar recursos
