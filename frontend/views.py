from django.shortcuts import render

# Any view we have to add them in the urls file of the app and next we add them in the main urls app
def index(request):
    return render(request, 'frontend/index.html')