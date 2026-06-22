# Proyecto Aguilas Aztecas

# Instalación y Configuración del Proyecto

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

* Git

Puedes verificar que Git está instalado ejecutando en cdm o terminal:

```bash
git --version
```

# Instalación de Git

Si aún no tienes Git instalado en tu computadora, sigue alguno de los siguientes recursos oficiales:

## Descargar Git

Página oficial de Git:

https://git-scm.com/downloads

Git detectará automáticamente tu sistema operativo (Windows, macOS o Linux) y te ofrecerá la versión adecuada.

---

Una vez instalado, abre una terminal (CMD, PowerShell o Git Bash) y ejecuta:

```bash
git --version
```

Si la instalación fue correcta, verás un resultado similar al siguiente:

```text
git version 2.51.0.windows.1
```

---

## Configuración inicial (solo la primera vez)

Configura el nombre y correo electrónico que esta registrado en Git Hub:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu_correo@ejemplo.com"
```

Puedes comprobar la configuración con:

```bash
git config --list
```

A partir de este punto ya puedes continuar con el proceso de clonación del repositorio.

---

# Paso 1. Elegir la ubicación del proyecto

Abre una terminal (CMD, PowerShell o Git Bash) y navega hasta la carpeta donde deseas guardar el proyecto.

Por ejemplo, si deseas guardarlo en la carpeta **Documentos**:

```bash
cd Documents
```

Si deseas guardarlo en una carpeta específica:

```bash
cd C:\Users\TuUsuario\Desktop\Proyectos
```

Puedes verificar tu ubicación actual con:

```bash
pwd
```

o en Windows:

```bash
cd
```

---

# Paso 2. Clonar el repositorio

Ejecuta el siguiente comando reemplazando la URL por la del repositorio correspondiente:

```bash
git clone https://github.com/BrandonCastilloHDS/P-ginaAguilasAztecas.git
```

Esto descargará todos los archivos del proyecto en una nueva carpeta.

---

# Paso 3. Entrar al proyecto

Una vez finalizada la descarga, ingresa a la carpeta creada:



---

# Paso 4. Verificar la rama actual

Comprueba en qué rama te encuentras:

```bash
git branch
```

Normalmente aparecerá:

```text
* main
```

---

# Paso 5. Actualizar el repositorio

Antes de comenzar a trabajar, descarga los cambios más recientes:

```bash
git pull origin main
```

De esta forma tendrás la versión más actualizada del proyecto.

---

# Paso 6. Crear una rama de trabajo

Cada desarrollador debe trabajar en su propia rama.

Crea una nueva rama utilizando tu nombre o un identificador único.

Ejemplo:

```bash
git switch -c nombre-rama
```

También puedes utilizar:

```bash
git checkout -b nombre-rama
```

Verifica que te encuentras en la nueva rama:

```bash
git branch
```

Salida esperada:

```text
main
* nombre-rama
```

---

# Paso 7. Subir la rama al repositorio

La primera vez que crees la rama debes publicarla en GitHub:

```bash
git push -u origin nombre-rama
```

Después de este paso, únicamente será necesario utilizar:

```bash
git push
```

---

# Paso 8. Guardar cambios

Una vez realizadas las modificaciones:

Agregar archivos al área de preparación:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "Descripción de los cambios realizados"
```

Subir los cambios:

```bash
git push
```

---

# Paso 9. Obtener los cambios realizados por otros integrantes

Antes de comenzar una nueva sesión de trabajo, actualiza tu rama con los cambios más recientes del proyecto.

Descarga la información del repositorio remoto:
###Aqui tengo duda preguntar a brandon

```bash
git fetch origin
```

Integra los cambios de la rama principal:

```bash
git merge origin/main
```

En caso de que el proyecto utilice otra rama principal (por ejemplo `devB`), reemplaza `main` por el nombre correspondiente.

---

# Comandos útiles

Ver el estado del repositorio:

```bash
git status
```


Ver la rama actual:

```bash
git branch
```

Ver todas las ramas:

```bash
git branch -a
```

Cambiar de rama:

```bash
git switch nombre-rama
```

Actualizar la rama principal:

```bash
git pull origin main
```

Ver el historial de commits:

```bash
git log --oneline
```

---

