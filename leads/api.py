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
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer

    #queryset = Lead.objects.all() # Query that grab all the lead
    def get_queryset(self):
        return self.request.user.leads.all() # To get only leads of that user

    # Save the lead owner when we create the lead
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)