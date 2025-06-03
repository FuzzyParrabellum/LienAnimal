from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_title = "LienAnimalAdmin" # Tab name in browser
admin.site.site_header = "Administration LienAnimal" # Title at login page
admin.site.index_title = "Modèles de LienAnimal" # Title at admin home page


urlpatterns = [
    path('admin/', admin.site.urls),
]

# rajout perso
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
