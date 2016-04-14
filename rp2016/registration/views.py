from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

from .forms import RegistrationForm

def index(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            return HttpResponseRedirect('/success/')
    else:
        form = RegistrationForm()
    return render(request, 'registration.html', {'form': form})

def success(request):
    return HttpResponse(request)