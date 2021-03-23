from django.shortcuts import render

# Create your views here.

def home(request):
    """Renders the home page."""
    return render(
        request,
        'dhk/index.html',
        { }
    )

def debug(request):
    """Renders the debug page."""
    return render(
        request,
        'dhk/debug.html',
        { }
    )
