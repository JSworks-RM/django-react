from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

"""
A ViewSet class is simply a type of class-based View, 
that does not provide any method handlers such as .get() or .post(),
and instead provides actions such as .list() and .create().
Typically, rather than explicitly registering the views in a viewset in the urlconf, you'll register the viewset with a router class, that automatically determines the urlconf for you.
"""
#Lead Viweset
class LeadViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing LeadSerializer.
    """
    queryset = Lead.objects.all() # Query that grab all the lead
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer