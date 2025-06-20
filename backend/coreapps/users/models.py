from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager

import uuid



class CustomUserManager(UserManager):
    use_in_migrations = True
    
    def _create_user(self, name, email, password, **extra_fields):

        if not email:
            raise ValueError("You have not specified a valid e-mail address.")
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)

        return user
    
    def create_user(self, name=None, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(name, email, password, **extra_fields)
    
    def create_superuser(self, name=None, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(name, email, password, **extra_fields)
    
class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, verbose_name="Public identifier")
    email = models.EmailField(
        verbose_name="Mail address",
        max_length=255,
        unique=True)
    name = models.CharField(max_length=255, verbose_name="User name")
    avatar = models.ImageField(upload_to='uploads/avatars', blank=True, null=True)

    # if want to use email verification later,
    # change below to default=False
    is_active= models.BooleanField(default=True)
    is_superuser= models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)

    date_created=models.DateTimeField(auto_now=True)
    last_login=models.DateTimeField(blank=True, null=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def avatar_url(self):
        if self.avatar:
            return f'{settings.WEBSITE_URL}{self.avatar.url}'
        else:
            return ''