from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads') # Registering our EndPoint route

urlpatterns = router.urls # Give us URLs that were registered for this endpoint